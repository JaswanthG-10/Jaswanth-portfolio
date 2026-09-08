import React, { useEffect, useRef } from 'react';

export const BackgroundMusicPlayer = () => {
  const playerRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    // Load YouTube IFrame API script dynamically if not loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const startSongAt10 = (player) => {
      if (!player || typeof player.playVideo !== 'function') return;
      try {
        player.seekTo(10, true); // Start from 0:10 (10 seconds mark)
        player.unMute();
        player.setVolume(70);
        player.playVideo();
        startedRef.current = true;
      } catch (_) {}
    };

    const initPlayer = () => {
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player('yt-bg-player-hidden', {
        videoId: 'lSqDKNeoGcs', // "The One" by Sai Abhyankkar
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: 'lSqDKNeoGcs',
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          start: 10, // Start timestamp at 10 seconds (0:10)
        },
        events: {
          onReady: (event) => {
            startSongAt10(event.target);
          },
          onStateChange: (event) => {
            // If video ends, loop back to 0:10 seconds
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(10, true);
              event.target.playVideo();
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

    // Global listener to trigger audio playback from 0:10 on first user interaction if browser blocks unmuted autoplay
    const handleUserInteraction = () => {
      if (playerRef.current) {
        startSongAt10(playerRef.current);
      }
    };

    const events = ['pointerdown', 'click', 'keydown', 'scroll', 'touchstart'];
    events.forEach((evt) => window.addEventListener(evt, handleUserInteraction, { passive: true }));

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, handleUserInteraction));
    };
  }, []);

  return (
    <div className="hidden pointer-events-none opacity-0" aria-hidden="true">
      <div id="yt-bg-player-hidden" />
    </div>
  );
};
