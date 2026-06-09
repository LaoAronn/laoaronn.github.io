export const handler = async (event) => {
  try {
    const { action, deviceId } = JSON.parse(event.body);
    const token = event.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Not authenticated' })
      };
    }

    let url = 'https://api.spotify.com/v1/me/player';
    let method = 'PUT';
    let body = null;

    if (action === 'play') {
      url += '/play';
      body = deviceId ? JSON.stringify({ device_ids: [deviceId] }) : null;
    } else if (action === 'pause') {
      url += '/pause';
    } else if (action === 'next') {
      url += '/next';
    } else if (action === 'previous') {
      url += '/previous';
    }

    const response = await fetch(url, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body
    });

    if (!response.ok) {
      throw new Error(`Playback action failed: ${response.status}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
