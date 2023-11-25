import { NavLink, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" activeClassName="active" exact>
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/projects" className="nav-link" activeClassName="active">
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link" activeClassName="active">
          Contact
        </NavLink>
      </li>
      {/* Add a new NavLink for the Resume page */}
      <li className="nav-item">
        <NavLink to="/resume" className="nav-link" activeClassName="active">
          Resume
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
