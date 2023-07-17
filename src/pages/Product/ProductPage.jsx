import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { daySpecialList } from "../../utils/mockData/daysSpecialProductList";
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";

const ProductPage = () => {
  const location = useLocation();
  const [productData, setProductData] = useState(location.state);
  const [currentQuantity, setCurrentQuantity] = useState(2);

  let { id } = useParams();
  console.log(productData);
  console.log(location.state);
  console.log(id);

  //   useEffect(() => {
  //     // get the product fromt the list of products
  //     const data = daySpecialList.filter((ele) => {
  //       return ele.id == id;
  //     });
  //     console.log(data + "use Effect triggred ");
  //     // setProductData(productData);
  //   }, [location.state === null]);

  const decrementQunatity = () => {
    if (currentQuantity > 0) {
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  const incrementQunatity = () => {
    setCurrentQuantity(currentQuantity + 1);
  };

  return (
    <>
      {/* //Product information content */}
      {/* bg-[#fef7f1] */}
      <div className="bread-crum-block flex flex-col gap-y-3  w-full h-[40vh] justify-center items-center p-9">
        <Typography className="text-[var(--website-font)] text-4xl text-center ">
          {productData.name}
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>

          <Typography color="text.primary">{productData.name}</Typography>
        </Breadcrumbs>
      </div>

      <div className="flex flex-col gap-y-3  md:flex-row md:justify-center md:items-start ">
        {/* Image Container */}
        <div className=" flex flex-col justify-center items-center gap-y-2 lg:items-start lg:ml-14 ">
          <img
            src="https://tuileriespatisserie.in/cdn/shop/products/SAH_4282_x432@2x.jpg?v=1678965799"
            alt=""
            className="w-[322px] shadow-xl lg:w-[420px]"
          />
          <div className="flex gap-x-3  ">
            <img
              src="https://tuileriespatisserie.in/cdn/shop/products/SAH_4282_x432@2x.jpg?v=1678965799"
              alt=""
              className="w-[100px]"
            />
            <img
              src="https://tuileriespatisserie.in/cdn/shop/products/SAH_4282_x432@2x.jpg?v=1678965799"
              alt=""
              className="w-[100px]"
            />
            <img
              src="https://tuileriespatisserie.in/cdn/shop/products/SAH_4282_x432@2x.jpg?v=1678965799"
              alt=""
              className="w-[100px]"
            />
          </div>
        </div>

        {/* Descriotion and Price Container */}

        <div className="product-description flex flex-col justify-center items-start pl-6 gap-y-8 mt-5 md:mt-0 md:max-w-[60%]">
          <Typography
            variant="h4"
            className=" text-[var(--website-font)] text-[#565656]"
          >
            {productData.name}
          </Typography>

          <Typography
            variant="h6"
            className=" text-[var(--website-font)] text-[#565656]"
          >
            ₹ {productData.price}
          </Typography>
          <Typography>
            The Most Loved Tuileries Charlottes Cake Yet, Tuileries Summer
            Charlotte Cake. 🥭
          </Typography>

          <Typography>
            Tuileries Patisserie presents the our "Summer Charlotte cake".
          </Typography>

          <Typography>
            Iconic hand piped ladyfingers , fresh mango compote and fluffy
            vanilla mousse, finished with fresh mango cubes and fresh
            cherries/blueberries. A French Classic cake and a tribute to sweet
            Indian Mangoes. This is a heavenly cake for White chocolate and
            mango lover!! ❤️ 🥭
          </Typography>

          <Typography>
            Ingredients: White Chocolate (23%) Sugar, flour (GLUTEN), egg,
            cream, butter, cocoa powder, mango
          </Typography>

          <Typography>Allergens: Egg, Gluten, Nut, Dairy</Typography>

          <Typography>Storage and Consumption Advice:</Typography>

          <Typography>
            Upon arrival keep the cake refrigerated for 60-70 minutes before
            consumption. Prone to melting (store in a cold and dry refrigeration
            always)
          </Typography>

          <Typography>
            For Delhi and NCR - Home delivery (Available) Self Pickup ( From Our
            Store)
          </Typography>

          <div className="flex justify-start  items-center gap-x-4 w-1/3">
            <button
              type="button"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              onClick={decrementQunatity}
            >
              -
            </button>
            <Typography>{currentQuantity}</Typography>
            <button
              type="button"
              className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              onClick={incrementQunatity}
            >
              +
            </button>
          </div>
          <button
            type="button"
            class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Add to cart
          </button>
        </div>

        {/* Increment Decrement Button */}
      </div>
    </>
  );
};

export default ProductPage;

{
  /* <img
src="https://tuileriespatisserie.in/cdn/shop/products/SAH_4282_x432@2x.jpg?v=1678965799"
alt=""
className=""
/> */
}
