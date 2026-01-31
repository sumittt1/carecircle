export default function InsuranceClaimModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Insurance Claim</h2>
      </div>
    </div>
  );
}