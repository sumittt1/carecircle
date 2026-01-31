export default function UserProfileModal({ userData, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{userData?.data?.name}</h2>
        <p>Age: {userData?.data?.age}</p>
        <p>Gender: {userData?.data?.gender}</p>
      </div>
    </div>
  );
}