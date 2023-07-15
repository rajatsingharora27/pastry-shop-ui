import React, { useRef } from "react";
import MiddleSection from "../MiddleSection/MiddleSection";
import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { daySpecialList } from "../../utils/mockData/daysSpecialProductList";

const HomePageCollection = () => {
  const sliderRef = useRef(null);
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
      <div className="carousel-container relative gap-y-5">
        <div className="absolute right-0 mr-6 pb-4">
          <ChevronLeftIcon
            onClick={onLeftClick}
            className="cursor-pointer p-2 m-2 rounded-full bg-yellow-200"
          />
          <ChevronRightIcon
            onClick={onRightClick}
            className="cursor-pointer p-2 m-2 rounded-full bg-yellow-200"
          />
        </div>
        <div
          id="content"
          ref={sliderRef}
          className="carousel flex scroll-smooth justify-center items-center m-2 overflow-x-auto scrollbar-hide"
        >
          {daySpecialList.map((product) => {
            // console.log(product.name);
            return (
              <div key={product.id}>
                <ProductCard productProps={product} />
              </div>
            );
          })}
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default HomePageCollection;

// import React, { useRef } from "react";
// import MiddleSection from "../MiddleSection/MiddleSection";
// import { Grid } from "@mui/material";
// import ProductCard from "../ProductCard/ProductCard";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// const HomePageCollection = () => {
//   const sliderRef = useRef(null);

//   const onLeftClick = () => {
//     // sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;

//     const slider = sliderRef.current;
//     const slideWidth = slider.offsetWidth;

//     if (slider.scrollLeft === 0) {
//       // If at the beginning, scroll to the end
//       slider.scrollLeft = slider.scrollWidth;
//     }
//     // Scroll left by one slide width
//     slider.scrollLeft -= slideWidth;
//   };

//   const onRightClick = () => {
//     // sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
//     const slider = sliderRef.current;
//     const slideWidth = slider.offsetWidth;

//     if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
//       // If at the end, scroll to the beginning
//       slider.scrollLeft = 0;
//     }
//     // Scroll right by one slide width
//     slider.scrollLeft += slideWidth;
//   };

//   return (
//     <div className="flex flex-col gap-y-10 ">
//       {/* Rest of the code */}
//       <div className="carousel-container relative gap-y-5">
//         <div className="absolute right-0 mr-6 pb-4">
//           <ChevronLeftIcon
//             onClick={onLeftClick}
//             className="cursor-pointer p-2 m-2 rounded-full bg-yellow-200"
//           />
//           <ChevronRightIcon
//             onClick={onRightClick}
//             className="cursor-pointer p-2 m-2 rounded-full bg-yellow-200"
//           />
//         </div>
//         <div
//           id="content"
//           ref={sliderRef}
//           className="carousel flex scroll-smooth justify-center items-center m-2 overflow-x-auto scrollbar-hide"
//         >
//           {/* Slider content */}
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />

//           <ProductCard />
//           <ProductCard />

//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />

//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           {/* Add more ProductCard components here */}
//         </div>
//       </div>
//       {/* Rest of the code */}
//     </div>
//   );
// };

// export default HomePageCollection;
