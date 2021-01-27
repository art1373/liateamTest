import React from "react";
import "./CartPrev.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removeFromCart,
  addToCart,
  clearCart,
} from "../../store/actions/cartActions";
import { calcTotalPrice, moneySplitter } from "../../utils/toolkits";
import { PlusOutlined, MinusOutlined, CloseOutlined } from "@ant-design/icons";
import Button from "../Button/Button";

const CartPrev = ({ cartItems, cartPrev, actions }) => {
  return (
    <>
      {cartPrev && cartItems.length !== 0 ? (
        <div className="prev-container">
          {cartItems.length !== 0 &&
            cartItems.map((item) => (
              <div className="item-section" key={item.id}>
                <div className="first-s">
                  <img
                    src={`https://back.liateam.ir/${item.small_pic}`}
                    alt="small_logo"
                    className="logo"
                  />
                  <div>
                    <p>{item.title}</p>
                    <p className="price">{moneySplitter(item.price.final_price)} تومان</p>
                  </div>
                </div>
                <div className="qty-icons">
                  <PlusOutlined
                    onClick={() => actions.IncrementCartItem(item, cartItems)}
                  />
                  <p>{item.quantity}</p>
                  <MinusOutlined
                    onClick={() => actions.decrementCartItem(item, cartItems)}
                  />
                </div>
                <CloseOutlined
                  className="close"
                  onClick={() => actions.removeItem(item, cartItems)}
                />
              </div>
            ))}
          <div className="total-price-wrapper">
            {cartPrev && (
              <div className="total-row">
                <h1>جمع کل:</h1>
                <span className="price">{calcTotalPrice(cartItems)} تومان</span>
              </div>
            )}
          </div>
          <div className="btn-container">
            <Button title="ثبت سفارش" />
          </div>
        </div>
      ) : (
        cartPrev &&
        cartItems.length === 0 && (
          <span className="empty-cart">سبد خرید شما خالی است!</span>
        )
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
    cartPrev: state.cart.cartPrev,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      decrementCartItem: bindActionCreators(removeFromCart, dispatch),
      IncrementCartItem: bindActionCreators(addToCart, dispatch),
      removeItem: bindActionCreators(clearCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPrev);
