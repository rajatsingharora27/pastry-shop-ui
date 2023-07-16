import React, { useRef } from "react";
import MiddleSection from "../MiddleSection/MiddleSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { daySpecialList } from "../../utils/mockData/daysSpecialProductList";
import { responsive } from "../../utils/breakpoints";

const HomePageCollection = () => {
  const sliderRef = useRef(null);
  let box = document.querySelector(".carousel-container");

  const onLeftClick = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };
  const onRightClick = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
  };

  return (
    <div className="flex flex-col gap-y-10 ">
      <MiddleSection />
      <div className="flex flex-col justify-center items-center my-3  gap-y-3 p-3 xl:mx-64">
        <h2 className="font-[var(--website-font)] text-center text-3xl  ">
          Featured Collections
        </h2>
        <h3 className="font-[var(--website-font)] text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          reprehenderit possimus optio, libero non earum? Libero animi tenetur
          exercitationem nam nemo esse cupiditate harum, ipsam perspiciatis
          consequuntur ab nesciunt dignissimos.
        </h3>
      </div>
      <div className="carousel-container  flex flex-col">
        <div className="relative">
          <div className=" absolute right-0 bottom-[2px] mr-6 pb-2 justify-end">
            <ChevronLeftIcon
              onClick={onLeftClick}
              className="cursor-pointer p-2 m-2 rounded-full bg-yellow-200"
            />
            <ChevronRightIcon
              onClick={onRightClick}
              className="cursor-pointer p-2 m-2 rounded-full bg-yellow-200"
            />
          </div>
        </div>

        <div
          className="carousel-container flex overflow-x-auto scroll-smooth"
          ref={sliderRef}
        >
          {daySpecialList.map((product) => {
            return (
              <div key={product.id}>
                <ProductCard productProps={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePageCollection;
