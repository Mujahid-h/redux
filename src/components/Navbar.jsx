import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartValue = useSelector((store) => store?.cart?.cartValue);

  return (
    <div
      style={{
        backgroundColor: "tomato",
        padding: "10px",
      }}
    >
      <h1>Cart {cartValue} </h1>
    </div>
  );
};

export default Navbar;
