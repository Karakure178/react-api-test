import "./HeaderNav.scss";

const HeaderNav = () => {
  return (
    <nav className="headernav">
      <ul className="headernav__wrapper">
        <li className="headernav__item">
          <a href="/">Home</a>
        </li>
        <li className="headernav__item">
          <a href="#">About</a>
        </li>
        <li className="headernav__item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
