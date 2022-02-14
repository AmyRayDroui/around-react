import logo from '../images/logos/page_logo.svg';

function Header() {
  return (
    <header className="header">
        <img id="page-logo" src={logo} alt="site logo" className="header__logo"/>
      </header>
  );
}

export default Header;