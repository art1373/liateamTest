import React from "react";
import "./Header.scss";
import LiaLogo from "../../assets/icons/lia.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartPreview from "../cartPreview/CartPreview";
import {
  toggleCartOpen,
  toggleCartClose,
} from "../../store/actions/cartActions";
import { bindActionCreators } from "redux";
import { calcQuantity } from "../../utils/toolkits";
import useOutsideClick from "../../utils/hooks/useOutsideClick";

const Header = ({ cartItems, actions }) => {
  const cartPrevRef = React.useRef();
  useOutsideClick(cartPrevRef, () => {
    actions.toggleCartClose();
  });
  return (
    <div>
      <nav>
        <ul className="nav-list">
          <div className="nav-wrapper">
            <Link to="/">
              <img
                src={LiaLogo}
                alt="lia-logo"
                style={{ width: "10rem", height: "5rem" }}
              />
            </Link>
            <li className="nav-items">خانه</li>
            <li className="nav-items">وبلاگ</li>
            <li className="nav-items">درباره ما</li>
            <li className="nav-items">تماس با ما</li>
            <li className="nav-items">سوالات متداول</li>
            <li className="nav-items">پرتال آموزشی</li>
          </div>
        </ul>
      </nav>
      <nav>
        <div className="second-nav-wrapper">
          <div className="second-nav-row">
            <span className="nav-links">مراقبت پوست</span>
            <span className="nav-links">مراقبت مو</span>
            <span className="nav-links">آرایشی</span>
            <span className="nav-links">پرفروشترین</span>
            <span className="nav-links">جدیدترین</span>
          </div>
          <div className="cart-holder">
            <ShoppingCartOutlined
              style={{ fontSize: "2rem", cursor: "pointer" }}
              onClick={actions.toggleCartOpen}
              ref={cartPrevRef}
            />
            {cartItems.length !== 0 && (
              <p className="cart-stick">{calcQuantity(cartItems)}</p>
            )}
            <CartPreview />
          </div>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      toggleCartOpen: bindActionCreators(toggleCartOpen, dispatch),
      toggleCartClose: bindActionCreators(toggleCartClose, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
