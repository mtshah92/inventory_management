import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
      </div>
      <div>
        <Link to="/department" className="nav-link">
          Departments
        </Link>
      </div>
      <div>
        <Link to="/products" className="nav-link">
          Products
        </Link>
      </div>
    </div>
  );
};
