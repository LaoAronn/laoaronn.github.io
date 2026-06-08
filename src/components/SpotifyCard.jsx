import { useState, useEffect } from 'react';

const SpotifyWidget = ({ playlistId }) => {
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <div className="space-y-3 pt-4 border-t border-zinc-700/30">
          {tracks.map((item, index) => (
            <div key={index} className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">
                  {item.track.name}
                </p>
                <p className="text-gray-400 text-xs truncate">
                  {item.track.artists.map(a => a.name).join(', ')}
                </p>
              </div>
              <p className="text-gray-500 text-xs whitespace-nowrap">
                {Math.floor(item.track.duration_ms / 60000)}:{String(Math.floor((item.track.duration_ms % 60000) / 1000)).padStart(2, '0')}
              </p>
            </div>
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
