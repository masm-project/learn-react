import { FC } from "react";
import { Link } from "react-router-dom";

interface Header {
  title?: string;
}

const Header: FC<Header> = ({ title = "Page Title" }) => {
  return (
    <header>
      <h2>{title}</h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/single'>Single</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
