import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { daySpecialList } from "../../utils/mockData/daysSpecialProductList";

const ProductPage = () => {
  const [productData, setProductData] = useState({});
  const location = useLocation();
  const { productId } = useParams();

  //   console.log(location.state);

  useEffect(() => {
    // get the product fromt the list of products
    const data = daySpecialList.filter((ele) => {
      return ele.id == productId;
    });
    console.log(data);
    // setProductData(productData);
  }, []);

  return <h1>ProductPage and product id is {productId}</h1>;
};

export default ProductPage;
