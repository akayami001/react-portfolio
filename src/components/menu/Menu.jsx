const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a key="home" href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a key="works" href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a key="portfolio" href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a key="contact" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
