import logoImg from "../assets/logo.svg";

import "../styles/header.scss";

export const Header = () => {
  return (
    <nav className="header-container">
      <img src={logoImg} alt="github explorer" />
    </nav>
  );
};
