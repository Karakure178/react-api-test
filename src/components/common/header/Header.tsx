import HeaderLogo from "./logo/HeaderLogo";
import "./Header.scss";
import HeaderNav from "./nav/HeaderNav";

const Header = () => {
  return (
    <header className="headerSection">
      <div className="headerSection__inner">
        <a className="heaserSection__logoLink">
          <HeaderLogo />
        </a>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
