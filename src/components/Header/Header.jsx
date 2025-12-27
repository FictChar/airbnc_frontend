import "./Header.css";
import logoImage from "./AIRBNClogo.png";
function Header() {
  return (
    <div className="header">
      <Logo />
      <MainMenu />
      <LoginButton />
    </div>
  );
}

export default Header;

function Logo() {
  return <img src={logoImage} alt="AIRBNC Logo" className="logo" />;
}

function MainMenu() {
  return <div>Filter</div>;
}

function LoginButton() {
  return <div>Login</div>;
}


