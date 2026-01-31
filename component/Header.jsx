export default function Header({ onNavigate, userData }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-text">CareCircle</div>
        <nav className="nav-menu">
          <a onClick={()=>onNavigate("dashboard")}>Dashboard</a>
          <a onClick={()=>onNavigate("about")}>About</a>
          <a onClick={()=>onNavigate("support")}>Support</a>
        </nav>
      </div>
    </header>
  );
}