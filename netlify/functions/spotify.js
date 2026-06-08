const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { playlistId } = JSON.parse(event.body);
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing Spotify credentials' })
    };
  }

  try {
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
      })
    });

    if (!authResponse.ok) {
      throw new Error('Failed to authenticate with Spotify');
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

    const tracksData = await tracksResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        playlist,
        tracks: tracksData.items
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
