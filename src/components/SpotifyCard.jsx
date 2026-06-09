import { useState, useEffect, useRef } from 'react';

const SpotifyWidget = ({ playlistId }) => {
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // Call Netlify function
        const response = await fetch('/.netlify/functions/spotify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ playlistId })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch playlist data');
        }

        const data = await response.json();
        setPlaylist(data.playlist);
        setTracks(data.tracks);
        setLoading(false);
      } catch (err) {
        console.error('Spotify error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSpotifyData();
  }, [playlistId]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentTrackIndex < tracks.length - 1) {
        playTrack(currentTrackIndex + 1);
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, tracks.length]);

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setTimeout(() => {
      if (audioRef.current && tracks[index]?.track?.preview_url) {
        audioRef.current.src = tracks[index].track.preview_url;
        audioRef.current.play();
      }
    }, 0);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handleNext = () => {
    if (currentTrackIndex < tracks.length - 1) {
      playTrack(currentTrackIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTrackIndex > 0) {
      playTrack(currentTrackIndex - 1);
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="w-full max-w-sm mx-auto p-6 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/30 animate-pulse">
        <div className="h-48 bg-zinc-700 rounded-xl mb-4"></div>
        <div className="h-6 bg-zinc-700 rounded mb-3"></div>
        <div className="h-4 bg-zinc-700 rounded w-2/3"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-sm mx-auto p-6 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/30">
        <p className="text-gray-400 text-sm">Unable to load Spotify playlist</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <a
        href={playlist?.external_urls?.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-6 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/30 hover:border-sky-400/30 hover:shadow-lg hover:shadow-sky-400/10 transition-all duration-300"
      >
        {/* Playlist Image */}
        {playlist?.images?.[0] && (
          <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
            <img
              src={playlist.images[0].url}
              alt={playlist.name}
              className="w-full aspect-square object-cover"
            />
            <a
              href={playlist?.external_urls?.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 w-12 h-12 rounded-full bg-sky-400 hover:bg-sky-500 flex items-center justify-center shadow-lg transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.26.3-3.239-1.98-8.159-2.58-12.008-1.686-.48.122-1.08-.12-1.20-.6-.12-.48.12-1.08.6-1.2 4.26-.975 9.66-.3 13.38 1.92.361.22.541.77.241 1.17zm.12-3.36C15.24 9.6 8.82 9.34 5.02 10.656c-.582.154-1.202-.114-1.356-.701-.154-.585.114-1.202.701-1.356 4.038-1.36 11.04-1.116 15.313 1.338.582.34.921 1.044.581 1.626-.341.582-1.044.922-1.626.582z" />
              </svg>
            </a>
          </div>
        )}

        {/* Playback Controls */}
        <div className="mb-6 pb-4 border-b border-zinc-700/30">
          <audio ref={audioRef} />
          
          {/* Current Track Info */}
          {tracks[currentTrackIndex] && (
            <div className="mb-4">
              <p className="text-gray-400 text-xs font-semibold mb-2">NOW PLAYING</p>
              <p className="text-white text-sm font-medium truncate">
                {tracks[currentTrackIndex].track.name}
              </p>
              <p className="text-gray-500 text-xs truncate">
                {tracks[currentTrackIndex].track.artists.map(a => a.name).join(', ')}
              </p>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mb-3 space-y-1">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={(e) => {
                if (audioRef.current) {
                  audioRef.current.currentTime = e.target.value;
                }
              }}
              className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentTrackIndex === 0}
              className="p-2 text-gray-400 hover:text-sky-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>

            <button
              onClick={togglePlayPause}
              disabled={!tracks[currentTrackIndex]?.track?.preview_url}
              className="p-3 bg-sky-400 hover:bg-sky-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-black rounded-full transition-colors shadow-lg"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <button
              onClick={handleNext}
              disabled={currentTrackIndex === tracks.length - 1}
              className="p-2 text-gray-400 hover:text-sky-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M16 18h2V6h-2zm-11-7l8.5-6v12z" />
              </svg>
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-3">
            {tracks[currentTrackIndex]?.track?.preview_url ? 'Preview available' : 'No preview'}
          </p>
        </div>

        {/* Playlist Info */}
        <div className="mb-4">
          <p className="text-sky-400 text-sm font-semibold mb-1">Featured Playlist</p>
          <h3 className="text-white text-xl font-bold mb-2 line-clamp-2">
            {playlist?.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {playlist?.description?.replace(/<[^>]*>/g, '') || 'A great playlist'}
          </p>
        </div>

        {/* Tracks List */}
        <div className="space-y-2 pt-4 border-t border-zinc-700/30">
          <p className="text-gray-400 text-xs font-semibold mb-3">PLAYLIST</p>
          {tracks.map((item, index) => (
            <button
              key={index}
              onClick={() => playTrack(index)}
              className={`w-full flex items-start justify-between gap-2 p-2 rounded-lg transition-colors ${
                index === currentTrackIndex
                  ? 'bg-sky-400/20 border border-sky-400/50'
                  : 'hover:bg-zinc-800/50'
              }`}
            >
              <div className="flex-1 min-w-0 text-left">
                <p className={`text-sm font-medium truncate ${index === currentTrackIndex ? 'text-sky-400' : 'text-white'}`}>
                  {item.track.name}
                </p>
                <p className="text-gray-400 text-xs truncate">
                  {item.track.artists.map(a => a.name).join(', ')}
                </p>
              </div>
              <p className="text-gray-500 text-xs whitespace-nowrap">
                {Math.floor(item.track.duration_ms / 60000)}:{String(Math.floor((item.track.duration_ms % 60000) / 1000)).padStart(2, '0')}
              </p>
            </button>
          ))}
        </div>

        {/* Open on Spotify */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sky-400 hover:text-sky-300 text-sm transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.26.3-3.239-1.98-8.159-2.58-12.008-1.686-.48.122-1.08-.12-1.20-.6-.12-.48.12-1.08.6-1.2 4.26-.975 9.66-.3 13.38 1.92.361.22.541.77.241 1.17zm.12-3.36C15.24 9.6 8.82 9.34 5.02 10.656c-.582.154-1.202-.114-1.356-.701-.154-.585.114-1.202.701-1.356 4.038-1.36 11.04-1.116 15.313 1.338.582.34.921 1.044.581 1.626-.341.582-1.044.922-1.626.582z" />
          </svg>
          Open on Spotify
        </div>
      </a>
    </div>
  );
};

export default SpotifyWidget;
