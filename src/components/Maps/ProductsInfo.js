import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { addToCart } from "../../store/actions/cartActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const ProductInfo = ({ product, actions }) => {
  return (
    <ProductCard
      title={product.title}
      price={product.price != null ? product.price.final_price : 0}
      image={product.small_pic}
      volume={product.volume}
      onClick={() => actions.addItemToCart(product)}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      addItemToCart: bindActionCreators(addToCart, dispatch),
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductInfo);
