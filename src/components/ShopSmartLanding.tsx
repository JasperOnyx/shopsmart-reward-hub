import { useEffect, useState } from 'react';
import { Shield, CreditCard, Gift, CheckCircle, Lock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

// A/B Testing variants
const headlineVariants = [
  "Unlock £750 Amazon Shopping Rewards — Join ShopSmart",
  "ShopSmart: Claim Your £750 Amazon Shopping Credit"
];

const ctaVariants = [
  "Claim My £750 Reward",
  "Get My Amazon Shopping Credit"
];

export const ShopSmartLanding = () => {
  const [headlineVariant, setHeadlineVariant] = useState(0);
  const [ctaVariant, setCtaVariant] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    // A/B test setup - randomly assign variants
    setHeadlineVariant(Math.floor(Math.random() * headlineVariants.length));
    setCtaVariant(Math.floor(Math.random() * ctaVariants.length));
    
    // Trigger hero animation
    setTimeout(() => setHeroLoaded(true), 100);
  }, []);

  const handleCtaClick = () => {
    // TODO: Replace with actual affiliate link
    window.open("YOUR_AFFILIATE_LINK_HERE", "_blank");
  };

  return (
    <div className="min-h-screen relative z-10 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Headline */}
          <h1 
            className={`text-4xl md:text-6xl font-bold mb-6 text-glow transition-smooth ${
              heroLoaded ? 'hero-enter' : ''
            }`}
            style={{ animationDelay: '200ms' }}
          >
            {headlineVariants[headlineVariant]}
          </h1>
          
          {/* Hero Subheadline */}
          <p 
            className={`text-xl md:text-2xl mb-12 text-muted-foreground text-glow-light transition-smooth ${
              heroLoaded ? 'hero-enter' : ''
            }`}
            style={{ animationDelay: '400ms' }}
          >
            A secure, premium way to get shopping credit — quick to sign up, tailored for select residents.
          </p>
          
          {/* Primary CTA */}
          <div 
            className={`mb-16 transition-smooth ${heroLoaded ? 'hero-enter' : ''}`}
            style={{ animationDelay: '600ms' }}
          >
            <Button 
              size="lg"
              className="btn-primary text-lg px-8 py-6 transition-smooth hover:scale-105"
              onClick={handleCtaClick}
            >
              {ctaVariants[ctaVariant]}
            </Button>
          </div>

          {/* Three Steps Process */}
          <div 
            className={`grid md:grid-cols-3 gap-8 mb-16 transition-smooth ${
              heroLoaded ? 'hero-enter' : ''
            }`}
            style={{ animationDelay: '800ms' }}
          >
            {/* Step 1 */}
            <div className="text-center group">
              <div className="step-badge mx-auto mb-4 transition-smooth group-hover:scale-110">
                <CreditCard className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary mr-2">1</span>
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium">
                Sign up with ShopSmart — Enter a few quick details.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="step-badge mx-auto mb-4 transition-smooth group-hover:scale-110">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary mr-2">2</span>
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium">
                Confirm your eligibility — Residents of UK, US, CA, or AU only.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="step-badge mx-auto mb-4 transition-smooth group-hover:scale-110">
                <Gift className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-primary mr-2">3</span>
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium">
                Receive your £750 Amazon shopping credit — Follow the redemption steps.
              </p>
            </div>
          </div>

          {/* Trust & Credibility Row */}
          <div 
            className={`flex flex-wrap justify-center gap-4 mb-16 transition-smooth ${
              heroLoaded ? 'hero-enter' : ''
            }`}
            style={{ animationDelay: '1000ms' }}
          >
            <div className="trust-badge">
              <Lock className="w-4 h-4 inline mr-2" />
              Secure & Private
            </div>
            <div className="trust-badge">
              <Shield className="w-4 h-4 inline mr-2" />
              Trusted Experience
            </div>
            <div className="trust-badge">
              <CheckCircle className="w-4 h-4 inline mr-2" />
              Terms Apply
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            No spam. We'll only use your info to deliver the reward process.
          </p>
        </div>
      </section>

      {/* Region Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 glow-brand text-center">
            <h3 className="text-xl font-semibold text-primary mb-2">Regional Eligibility</h3>
            <p className="text-lg text-foreground">
              This offer is available only to residents of the United Kingdom, United States, Canada, or Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-4">
            This promotion is independent and is not endorsed by Amazon. Terms & conditions apply.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary hover:text-primary/80 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};