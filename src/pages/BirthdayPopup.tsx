import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import CuteButton from '@/components/CuteButton';
import Sparkles from '@/components/Sparkles';

const BirthdayPopup = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper gradient="romantic">
      <Sparkles count={25} />
      
      {/* Blurred background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/40 rounded-full blur-3xl" />
      </div>

      {/* Birthday Popup */}
      {showPopup && (
        <div className="relative z-20 animate-pop-in">
          <div className="bg-card/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-romantic border border-primary/20 max-w-md mx-4 text-center">
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl animate-bounce-soft">
              🎂
            </div>
            <div className="absolute -top-4 -left-4 text-2xl animate-wiggle" style={{ animationDelay: '0.2s' }}>
              🎈
            </div>
            <div className="absolute -top-4 -right-4 text-2xl animate-wiggle" style={{ animationDelay: '0.5s' }}>
              🎈
            </div>
            
            {/* Content */}
            <div className="mb-6 text-5xl animate-bounce-soft">
              🎉
            </div>
            
            <h1 className="font-caveat text-5xl md:text-6xl text-foreground mb-4 text-shadow-soft">
              Happiest Birthday
            </h1>
            
            <div className="text-4xl mb-6">❤️🎀</div>
            
            <p className="text-muted-foreground font-quicksand text-lg mb-8">
              Someone special has a surprise for you...
            </p>

            <CuteButton onClick={() => navigate('/meme-cat')}>
              Click to continue 🎁
            </CuteButton>

            {/* Bottom decorations */}
            <div className="flex justify-center gap-2 mt-6 text-xl">
              <span className="animate-bounce-soft" style={{ animationDelay: '0s' }}>🌸</span>
              <span className="animate-bounce-soft" style={{ animationDelay: '0.2s' }}>💖</span>
              <span className="animate-bounce-soft" style={{ animationDelay: '0.4s' }}>🌸</span>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default BirthdayPopup;
