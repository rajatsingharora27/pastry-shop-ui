import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { daySpecialList } from "../../utils/mockData/daysSpecialProductList";
import { Box, Breadcrumbs, Typography } from "@mui/material";

const ProductPage = () => {
  const location = useLocation();
  const [productData, setProductData] = useState(location.state);

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

  return (
    <>
      {/* //Product information content */}
      {/* bg-[#fef7f1] */}
      <div className="bread-crum-block flex flex-col gap-y-3  w-full h-[40vh] justify-center items-center p-9">
        <Typography className="text-[var(--website-font)] text-4xl text-center ">
          Belgium chocolate cake (400gm - 500gm)
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" to="/">
            Home
          </Link>

          <Typography color="text.primary">
            Belgium chocolate cake (400gm - 500gm)
          </Typography>
        </Breadcrumbs>
      </div>

      <div className="flex flex-col gap-y-3">
        {/* <Box className=" h-1/3 justify-center items-center p-16 md:h-1/5 w- "> */}

        <div className=" flex flex-col justify-center items-center gap-y-2 md:items-start md:ml-14">
          <img
            src="https://tuileriespatisserie.in/cdn/shop/products/SAH_4282_x432@2x.jpg?v=1678965799"
            alt=""
            className="w-[420px] "
          />
          {/* ml-[35px] mx-auto md:w-[350px] md:ml-[35px] */}

          <div className="flex gap-x-3 ">
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
