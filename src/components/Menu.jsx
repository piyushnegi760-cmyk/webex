const menuItems = [
  {
    id: "home",
    number: "01",
    title: "Home",
  },
  {
    id: "about",
    number: "02",
    title: "About",
  },
  {
    id: "services",
    number: "03",
    title: "Services",
  },
  {
    id: "work",
    number: "04",
    title: "Our Work",
  },
  {
    id: "contact",
    number: "05",
    title: "Contact",
  },
];

export default function Menu({
  currentPage,
  onNavigate,
  onClose,
}) {
  return (
    <div className="menu-overlay">

      <button
        className="close-menu"
        onClick={onClose}
        aria-label="Close menu"
      >
        ×
      </button>

      <div className="menu-inner">

        <div className="menu-header">
          <span>WEBEX</span>
          <span>MENU</span>
        </div>

        <nav className="menu-navigation">

          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${
                currentPage === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() => onNavigate(item.id)}
            >
              <span className="menu-number">
                {item.number}
              </span>

              <span className="menu-title">
                {item.title}
              </span>

              <span className="menu-arrow">
                ↗
              </span>
            </button>
          ))}

        </nav>

        <div className="menu-bottom">
          <span>
            DIGITAL STUDIO
          </span>

          <span>
            DEHRADUN / INDIA
          </span>
        </div>

      </div>
    </div>
  );
}