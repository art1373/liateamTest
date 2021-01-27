import React from "react";
import "./CatInfo.scss";
import Banner from "../../assets/icons/slider-post.png";

const CategorieMap = ({ categorie, history }) => {
  return (
    <div
      className="catgorie-card"
      onClick={() => history.push(`/products/${categorie.id}`)}
    >
      <img
        className="catg-banner"
        src={Banner}
        alt="categorie-banner"
      />
    </div>
  );
};

export default CategorieMap;
