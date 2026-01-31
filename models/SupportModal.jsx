export default function SupportModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Support</h2>
        <p>Email: support@carecircle.com</p>
      </div>
    </div>
  );
}