export default function WellnessProgramModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Wellness Programs</h2>
      </div>
    </div>
  );
}