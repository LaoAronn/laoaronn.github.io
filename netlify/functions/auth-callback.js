export const handler = async (event) => {
  try {
    const { code } = event.queryStringParameters || {};
    
    if (!code) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing authorization code' })
      };
    }

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirectUri = `${process.env.DEPLOY_URL || 'http://localhost:8888'}/auth/callback`;

    // Exchange code for access token
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret
      }).toString()
    });

    if (!response.ok) {
      throw new Error(`Token exchange failed: ${response.status}`);
    }

    const data = await response.json();

    // Store token in cookie (httpOnly for security)
    return {
      statusCode: 200,
      headers: {
        'Set-Cookie': `spotify_token=${data.access_token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${data.expires_in}`,
        'Location': '/'
      },
      body: JSON.stringify({ 
        success: true,
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresIn: data.expires_in
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
