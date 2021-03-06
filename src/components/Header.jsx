import React, { useContext } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  CartStateContext,
  CartDispatchContext,
  toggleCartPopup
} from "contexts/cart";
import { CommonDispatchContext, setSearchKeyword } from "contexts/common";
import CartPreview from "components/CartPreview";

const Header = (props) => {
  const { items: cartItems, isCartOpen } = useContext(CartStateContext);
  const commonDispatch = useContext(CommonDispatchContext);
  const cartDispatch = useContext(CartDispatchContext);
  const cartQuantity = cartItems.length;
  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const handleSearchInput = (event) => {
    return setSearchKeyword(commonDispatch, event.target.value);
  };

  const handleCartButton = (event) => {
    event.preventDefault();
    return toggleCartPopup(cartDispatch);
  };

  return (
    <header>
      <div className="container">
        <div className="brand">
          <Link to="/">
            <img
              className="logo"
              src="https://res.cloudinary.com/suraiya/image/upload/v1634195113/logo.png"
              alt="Veggy Brand Logo"
            />
          </Link>
        </div>

        <div className="search">
          <a
            className="mobile-search"
            href="#"
            // onClick={this.handleMobileSearch.bind(this)}
          >
            <img
              src="https://res.cloudinary.com/suraiya/image/upload/v1634195901/search-green.png"
              alt="search"
            />
          </a>
          <form action="#" method="get" className="search-form">
            <a
              className="back-button"
              href="#"
              // onClick={this.handleSearchNav.bind(this)}
            >
              <img
                src="https://res.cloudinary.com/suraiya/image/upload/v1634195945/back.png"
                alt="back"
              />
            </a>
            <input
              type="search"
              placeholder="Search for Vegetables and Fruits"
              className="search-keyword"
              onChange={handleSearchInput}
            />
            <button
              className="search-button"
              type="submit"
              // onClick={this.handleSubmit.bind(this)}
            />
          </form>
        </div>

        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{cartQuantity}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{cartTotal}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a className="cart-icon" href="#" onClick={handleCartButton}>
            <img
              className={props.cartBounce ? "tada" : " "}
              src="https://res.cloudinary.com/suraiya/image/upload/v1634195986/bag.png"
              alt="Cart"
            />
            {cartQuantity ? (
              <span className="cart-count">{cartQuantity}</span>
            ) : (
              ""
            )}
          </a>
          <CartPreview />
        </div>
      </div>
    </header>
  );
};

export default Header;
