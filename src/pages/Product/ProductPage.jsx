import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { daySpecialList } from "../../utils/mockData/daysSpecialProductList";

const ProductPage = () => {
  const [productData, setProductData] = useState({});
  const location = useLocation();
  let { id } = useParams();

  console.log(location.state);
  console.log(id);

  //   useEffect(() => {
  //     // get the product fromt the list of products
  //     const data = daySpecialList.filter((ele) => {
  //       return ele.id == productId;
  //     });
  //     console.log(data);
  //     // setProductData(productData);
  //   }, [location.state == null]);

  return <h1>ProductPage and product id is {id}</h1>;
};

export default ProductPage;
