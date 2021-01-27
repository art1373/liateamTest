import React from "react";
import "./productCard.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { moneySplitter } from "../../utils/toolkits";

const ProductCard = ({ title, image, price, volume, onClick }) => {
  return (
    <div className="product-card">
      <img
        className="prod-img"
        src={`https://back.liateam.ir${image}`}
        alt="product"
      />
      <div style={{ width: "100%" }}>
        <span className="new">جدید</span>
      </div>
      <h3 className="txt">{title}</h3>
      <h4 className="volume">{volume}</h4>
      <div className="card-footer">
        <ShoppingCartOutlined
          onClick={onClick}
          style={{ fontSize: "30px", color: "#0090FF", marginRight: "9px" }}
        />
        <h2 className="price">{moneySplitter(price)} تومان</h2>
      </div>
    </div>
  );
};

export default ProductCard;
