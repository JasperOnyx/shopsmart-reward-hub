import { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating particles
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random starting position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random animation delay and duration
      particle.style.animationDelay = Math.random() * 30 + 's';
      particle.style.animationDuration = (25 + Math.random() * 10) + 's';
      
      // Random size variation
      const size = 2 + Math.random() * 4;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 35000);
    };

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createParticle(), i * 1000);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 bg-gradient-particles"
      style={{
        background: 'linear-gradient(135deg, hsl(220 15% 8%) 0%, hsl(220 30% 12%) 40%, hsl(34 40% 15%) 100%)'
      }}
    />
  );
};