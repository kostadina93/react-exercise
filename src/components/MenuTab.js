import { NavLink } from "react-router-dom";

const MenuTab = ({ linkTo, title }) => (
  <NavLink className="MenuTab" to={linkTo} replace activeClassName="selected">
    <div className="MenuTab__title" title={title}>{title}</div>
    <svg className="MenuTab__icon" xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 50 50" fill="none">
      <circle cx="25" cy="25" r="25" fill="none"/>
    </svg>
  </NavLink>
)

export default MenuTab;