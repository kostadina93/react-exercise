import { NavLink } from "react-router-dom";

import { servicesIcons } from '../assets';

const Tile = ({ data }) => (
  <div className="Tile">
    <img className="Tile__item Tile__image" src={servicesIcons[data.icon]} alt="icon1" />
    <h4 className="Tile__item Tile__title">{data.title}</h4>
    <span className="Tile__item Tile__description">{data.description}</span>
    <NavLink className="Tile__item Tile__link" to="#">{`${data.link} >`}</NavLink>
  </div>
)

export default Tile;