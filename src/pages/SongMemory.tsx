import { useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import CuteButton from '@/components/CuteButton';

const SongMemory = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper gradient="romantic">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-4xl opacity-20 animate-float">🎵</div>
        <div className="absolute top-20 right-20 text-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🎶</div>
        <div className="absolute bottom-20 left-20 text-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🎵</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>🎶</div>
      </div>

      <div className="relative z-20 max-w-2xl mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <div className="bg-card/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-romantic border border-primary/20">
            {/* Music icon */}
            <div className="text-6xl mb-6 animate-bounce-soft">🎧</div>
            
            <h2 className="font-caveat text-3xl md:text-4xl text-foreground mb-8">
              Hey, as you know it's your birthday...
            </h2>
            
            <p className="font-quicksand text-lg md:text-xl text-foreground/90 leading-relaxed mb-4">
              I hope you always stay happy.
            </p>
            
            <p className="font-quicksand text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              And here's a song for you for every time you want to remember me 🤍
            </p>

            {/* Spotify Embed */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-soft animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/3OAFzjwWionh8OfM4kgf2R?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            <CuteButton onClick={() => navigate('/vintage-letter')}>
              One more thing 💌
            </CuteButton>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SongMemory;
