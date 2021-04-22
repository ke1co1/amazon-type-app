import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTjb6rsDkhNMa7aQoMoANCpS_su-aEkRADeQ&usqp=CAU"
          alt=""
        />
        <div>
          <h4 className="checkout__user">
            Hello, {!user ? "guest" : user?.email}
          </h4>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
