import React from "react";

const MenuItem = ({ name, price, description }) => {
  return (
    <li>
      <span className="menu-item-name">{name}</span>
      <span className="menu-item-price">{price}</span>
      <p>{description}</p>
    </li>
  );
};

export default MenuItem;
