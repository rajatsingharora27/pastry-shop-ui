import React from "react";
import { Button, Typography } from "@mui/material";

const CheckoutCard = () => {
  return (
    <div className="product flex flex-col gap-y-7 md:flex md:w-[60%] md:shadow-xl md:p-6">
      <div className="product-name-image flex justify-between items-center ">
        <img
          className="w-1/5 h-1/5 shadow-xl rounded-md"
          src="https://tuileriespatisserie.in/cdn/shop/products/MANGOENTLIGHTHALF.jpg?v=1678882091"
          alt=""
        />
        <Typography>Summer Charolte (1100 - 1500 gm)</Typography>
      </div>
      <div className="price flex justify-between items-center">
        <Typography variant="h6">Product Price</Typography>
        <Typography>₹ 2000</Typography>
      </div>
      <div className="quantity flex justify-between items-center">
        <Typography variant="h6">Quantity</Typography>
        <div className="flex justify-end items-center">
          <Button variant="conatined" className="bg-gray-400 text-white">
            +
          </Button>
          <Typography>x 1</Typography>
          <Button variant="conatined" className="bg-gray-400 text-white">
            -
          </Button>
        </div>
      </div>
      <div className="total  flex justify-between items-center">
        <Typography variant="h6">Total</Typography>
        <Typography>₹ 2000</Typography>
      </div>
      {/* <div className="delete-product"></div> */}
      <hr />
    </div>
  );
};

export default CheckoutCard;
