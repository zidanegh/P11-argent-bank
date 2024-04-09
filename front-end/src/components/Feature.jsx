export default function Feature({ src, alt, titre, text }) {
  return (
    <>
      <div className="feature-item">
        <img src={src} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{titre}</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
