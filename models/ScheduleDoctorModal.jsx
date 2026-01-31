export default function ScheduleDoctorModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Schedule Doctor</h2>
        <button className="liquid-btn">Confirm</button>
      </div>
    </div>
  );
}