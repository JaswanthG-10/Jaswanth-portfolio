import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export const BackgroundMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame API script dynamically
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player('yt-bg-player', {
        videoId: 'lSqDKNeoGcs', // "The One" by Sai Abhyankkar
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: 'lSqDKNeoGcs',
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: (event) => {
            setPlayerReady(true);
            event.target.setVolume(50);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED
            ) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // First user interaction auto-start listener
    const handleFirstInteraction = () => {
      if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
        // Only start if not already played
      }
    };
    window.addEventListener('click', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    if (!playerRef.current || typeof playerRef.current.playVideo !== 'function') return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    if (!playerRef.current || typeof playerRef.current.mute !== 'function') return;

    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* Hidden YouTube IFrame */}
      <div className="hidden" aria-hidden="true">
        <div id="yt-bg-player" />
      </div>

      {/* Floating Music Track Badge & Control */}
      <div
        ref={containerRef}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 p-2 pr-4 rounded-full bg-[#121218]/90 border border-white/20 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#E11D48]/50"
      >
        <button
          onClick={togglePlay}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
            isPlaying
              ? 'bg-gradient-to-r from-[#E11D48] to-[#06B6D4] text-white shadow-cinematic-red'
              : 'bg-white/10 text-slate-300 hover:bg-white/20'
          }`}
          aria-label={isPlaying ? 'Pause Intro Song' : 'Play Intro Song'}
          title={isPlaying ? 'Pause Intro Song' : 'Play "The One" by Sai Abhyankkar'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <div className="flex flex-col text-left cursor-pointer" onClick={togglePlay}>
          <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-white tracking-tight hero-heading">
            <Music className={`w-3 h-3 ${isPlaying ? 'text-[#06B6D4] animate-pulse' : 'text-slate-400'}`} />
            <span>The One</span>
            {isPlaying && (
              <span className="flex items-center gap-0.5 ml-1">
                <span className="w-0.5 h-2.5 bg-[#E11D48] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-0.5 h-3.5 bg-[#06B6D4] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 h-2 bg-[#F43F5E] animate-bounce" style={{ animationDelay: '300ms' }} />
              </span>
            )}
          </div>
          <span className="text-[9px] font-mono text-slate-400">
            Sai Abhyankkar • Intro Audio
          </span>
        </div>

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-1 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#E11D48]" /> : <Volume2 className="w-3.5 h-3.5 text-[#06B6D4]" />}
          </button>
        )}
      </div>
    </>
  );
};
