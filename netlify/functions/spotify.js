export const handler = async (event) => {
  try {
    const { playlistId } = JSON.parse(event.body);
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing Spotify credentials' })
      };
    }

    // Get access token
    const authResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret
      }).toString()
    });

    if (!authResponse.ok) {
      throw new Error(`Spotify auth failed: ${authResponse.status}`);
    }

    const authData = await authResponse.json();
    const token = authData.access_token;

    // Fetch playlist
    const playlistResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (!playlistResponse.ok) {
      throw new Error(`Failed to fetch playlist: ${playlistResponse.status}`);
    }

    const playlist = await playlistResponse.json();

    // Fetch tracks
    const tracksResponse = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=5`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (!tracksResponse.ok) {
      throw new Error(`Failed to fetch tracks: ${tracksResponse.status}`);
    }

    const tracksData = await tracksResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        playlist,
        tracks: tracksData.items
      })
    };
  } catch (error) {
    console.error('Spotify function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
