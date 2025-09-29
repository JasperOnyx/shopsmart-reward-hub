import { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const names = [
  'James', 'Olivia', 'Ethan', 'Amelia', 'Daniel', 'Sophie', 
  'Harry', 'Grace', 'Jack', 'Chloe', 'William', 'Emily', 
  'George', 'Lily', 'Thomas', 'Hannah'
];

const messageTemplates = [
  'just claimed ShopSmart £750 Amazon Reward',
  'just accessed ShopSmart £750 Amazon Reward', 
  'just unlocked ShopSmart £750 Amazon Reward'
];

export const NotificationToast = () => {
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    message: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomMessage = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];
      
      setCurrentNotification({
        name: randomName,
        message: randomMessage
      });
      setIsVisible(true);
      
      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay, then show first notification
    const initialTimeout = setTimeout(showNotification, 2000);
    
    // Then repeat every 13 seconds (5s visible + 8s hidden)
    const interval = setInterval(showNotification, 13000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification) return null;

  return (
    <div 
      className={`notification-card transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <User className="w-4 h-4 text-primary" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground">
            <span className="font-semibold">{currentNotification.name}</span> {currentNotification.message}
          </p>
        </div>
      </div>
    </div>
  );
};