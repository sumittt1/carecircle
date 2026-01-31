export default function AboutModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e=>e.stopPropagation()}>
        <h2>About CareCircle</h2>
        <p>Premium healthcare management platform.</p>
      </div>
    </div>
  );
}