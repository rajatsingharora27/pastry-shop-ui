import { Chip } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ productProps }) {
  const navigate = useNavigate();

  const openProductPage = () => {
    navigate(`/product/${productProps.id}`, { state: productProps });
  };

  return (
    <>
      <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg ">
        <div className="top">
          <img
            className="w-[200px] h-[200px] object-cover p-2 cursor-pointer "
            src={`${productProps.imageUrl}`}
            alt="img"
            onClick={openProductPage}
          />
        </div>

        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div
            className="title font-semibold text-xs my-1 cursor-pointer "
            onClick={openProductPage}
          >{`${productProps.name}`}</div>
          {/* <div className="category text-xs font-light my-1">
            5.4 cm (6.1-inch) display1
          </div> */}

          <div className="pricing flex items-center">
            <div className="price "> ₹{`${productProps.price}`}</div>
            <div className="ml-2 text-xs ">
              {/* ₹<del> {`${product.price}`}</del> */}
            </div>
            {!productProps.isAvailable && (
              <Chip
                label="Sold Out"
                size="small"
                className="bg-red-300 text-white"
              />
            )}
          </div>

          <div className="flex items-center my-2">
            <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
              Buy Now
            </button>
            <button className="border px-3 py-1 text-xs rounded-lg ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
