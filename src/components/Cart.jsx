import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const addingToCart = () => {
    dispatch(addToCart());
  };
  return (
    <div>
      <button
        style={{
          background: "green",
          padding: "10px 20px",
          outline: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
          fontSize: "1rem",
          margin: "10px",
          fontWeight: "bold",
          borderRadius: "10px",
        }}
        onClick={addingToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
