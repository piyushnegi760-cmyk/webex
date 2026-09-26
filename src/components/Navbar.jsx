export default function Navbar({ onMenu }) {
  return (
    <header className="navbar">

      <button
        className="nav-logo"
        onClick={() => window.location.reload()}
      >
        WEBEX
      </button>

      <button
        className="menu-button"
        onClick={onMenu}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>

    </header>
  );
}