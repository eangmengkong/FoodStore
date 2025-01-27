import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="sticky flex items-center justify-evenly bg-neutral-800 py-2">
      <div className="logo">
        <img src="./images/funfood/logo.png" alt="Logo" />
      </div>

      <ul className="flex gap-5 text-white">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="aboutus">About us</Link>
        </li>
        <li>
          <Link to="menu">Menu</Link>
        </li>
        <li>
          <Link to="team">Team</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
        <li>
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="pricing">Pricing</Link>
        </li>
        <li>
          <Link to="reservation">Reservation</Link>
        </li>
        <li>
          <Link to="contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
