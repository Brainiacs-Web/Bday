import { useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import CuteButton from '@/components/CuteButton';
import FloatingHearts from '@/components/FloatingHearts';
import cuteBirthdayCat from '@/assets/cute-birthday-cat.jpg';

const MemeCat = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper gradient="blush">
      <FloatingHearts count={12} />
      
      <div className="relative z-20 max-w-4xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Cat Image */}
          <div className="relative animate-fade-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Cute birthday cat image */}
              <div className="w-full h-full bg-card rounded-3xl shadow-romantic border-4 border-primary/20 flex items-center justify-center overflow-hidden p-4">
                <img 
                  src={cuteBirthdayCat} 
                  alt="Cute birthday cat with cake and flowers" 
                  className="w-full h-full object-contain animate-bounce-soft"
                />
              </div>
              
              {/* Decorative sparkles around cat */}
              <div className="absolute -top-4 -right-4 text-2xl animate-sparkle">✨</div>
              <div className="absolute -bottom-4 -left-4 text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>✨</div>
              <div className="absolute top-1/2 -right-6 text-xl animate-sparkle" style={{ animationDelay: '1s' }}>⭐</div>
            </div>
          </div>

          {/* Letter Content */}
          <div className="animate-fade-up flex-1" style={{ animationDelay: '0.3s' }}>
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-soft border border-primary/10">
              <h2 className="font-caveat text-4xl md:text-5xl text-foreground mb-6 flex items-center gap-3">
                <span>Happy Birthday</span>
                <span className="text-3xl">🐾🎂</span>
              </h2>
              
              <p className="font-quicksand text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                You make every day cuter just by existing. 
                <span className="inline-block ml-2 animate-bounce-soft">💕</span>
              </p>
              
              <p className="font-quicksand text-muted-foreground italic mb-8">
                "Like a little sunshine wrapped in soft fur..."
              </p>

              <CuteButton onClick={() => navigate('/song-memory')} variant="secondary">
                Next 🐱
              </CuteButton>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default MemeCat;
