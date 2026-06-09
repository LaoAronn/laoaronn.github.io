export const handler = async (event) => {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = `${process.env.DEPLOY_URL || 'http://localhost:8888'}/auth/callback`;
    const scope = 'streaming user-read-private user-read-email user-modify-playback-state';

    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.append('client_id', clientId);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', redirectUri);
    authUrl.searchParams.append('scope', scope);

    return {
      statusCode: 200,
      body: JSON.stringify({ authUrl: authUrl.toString() })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
