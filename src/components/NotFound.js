import { NavLink } from "react-router-dom";

export const NotFound = () => (
  <div className="NotFound">
    <h1 className="NotFound__title">NOT FOUND</h1>
    <span className="NotFound__description">
      The page requested was not found! <NavLink to="/" replace>Return to home</NavLink>
    </span>
  </div>
);

export default NotFound;