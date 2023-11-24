import React from "react";
import MenuItem from "./MenuItem";

const MenuCategory = ({ category, items }) => {
  return (
    <div className="menu-category">
      <h3>{category}</h3>
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default MenuCategory;
