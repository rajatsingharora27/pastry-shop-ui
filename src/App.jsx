import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MiddleSection from "./components/MiddleSection/MiddleSection";

const App = () => {
  return (
    <>
      <Navbar />
      <MiddleSection />
      <div className="flex flex-col justify-center items-center my-3 p-14 gap-y-3">
        <h2 className="font-[var(--website-font)] text-center  ">
          Featured Collections
        </h2>
        <h3 className="font-[var(--website-font)] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          reprehenderit possimus optio, libero non earum? Libero animi tenetur
          exercitationem nam nemo esse cupiditate harum, ipsam perspiciatis
          consequuntur ab nesciunt dignissimos.
        </h3>
      </div>
    </>
  );
};

export default App;
