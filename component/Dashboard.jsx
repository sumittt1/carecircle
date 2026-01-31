export default function Dashboard({ userData }) {
  return (
    <div className="container">
      <h1>Welcome, {userData?.data?.name}</h1>

      <div className="dashboard-grid">
        <div className="liquid-card">
          <h2>Health Summary</h2>
          <p>Your health data at a glance</p>
        </div>

        <div className="liquid-card">
          <h2>Appointments</h2>
          <p>No appointments scheduled</p>
        </div>

        <div className="liquid-card">
          <h2>Reminders</h2>
          <p>All medications on track</p>
        </div>
      </div>
    </div>
  );
}