export default function HealthAnalyticsModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Health Analytics</h2>
        <p>Charts coming soon</p>
      </div>
    </div>
  );
}