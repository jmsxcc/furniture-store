import React, { useState } from "react";
import "./menu.css";
import Datamenu from "./Datamenu";

export const Menu = () => {
  const [items, setItems] = useState(Datamenu);
  const filterItem = (categoryItem) => {
    const updateItem = Datamenu.filter((value) => {
      return value.category === categoryItem;
    });

    setItems(updateItem);
  };

  return (
    <div className="con-menu" id="menu">
      <div className="menu-filters">
        <span className="menu-item" onClick={() => setItems(Datamenu)}>
          All
        </span>

        <span className="menu-item" onClick={() => filterItem("Bedroom")}>
          Bedroom
        </span>

        <span className="menu-item" onClick={() => filterItem("Bathroom")}>
          Bathroom
        </span>

        <span className="menu-item" onClick={() => filterItem("Kitchen")}>
          Kitchen
        </span>
      </div>

      <div className="card-menu">
        {items.map((elem) => {
          const { id, image, header, title, price } = elem;
          return (
            <div className="card" key={id}>
              <img src={image} className="card-img" />
              <div className="card-info">
                <p className="text-header">{header}</p>
                <p className="text-title">{title}</p>
              </div>

              <div className="card-footer">
                <span className="text-price">{price}</span>
                <div className="card-button">
                  <img
                    className="icon-cart"
                    src="https://img.icons8.com/pastel-glyph/100/shopping-cart--v2.png"
                    alt="cart"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
