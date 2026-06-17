const SpotifyCard = ({ playlistId }) => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        data-testid="embed-iframe"
        style={{ borderRadius: '12px' }}
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyCard;
