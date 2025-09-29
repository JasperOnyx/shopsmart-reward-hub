import { useEffect } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ShopSmartLanding } from '@/components/ShopSmartLanding';
import { NotificationToast } from '@/components/NotificationToast';

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "ShopSmart - Win £750 Amazon Shopping Rewards | UK, US, CA & AU";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Join ShopSmart and claim your £750 Amazon shopping credit. Secure, premium experience for eligible UK, US, Canada & Australia residents. Quick sign-up process.'
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden font-poppins">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <ShopSmartLanding />
      
      {/* Floating Notifications */}
      <NotificationToast />
    </div>
  );
};

export default Index;
