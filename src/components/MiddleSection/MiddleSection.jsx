import React from "react";
import { Button, Card, Typography } from "@mui/material";
import bannerImage from "../../utils/images/imagePath";

const MiddleSection = () => {
  return (
    /*
    Need to handle images 
    and the content through api
    */
    <div
      className="bg-[url('https://cdn.shopify.com/s/files/1/0580/2668/8535/files/banner.jpg?v=1679214987')]
     bg-cover bg-center h-96 "
    >
      <Card
        variant="outlined"
        className="relative gap-y-6  flex flex-col justify-center items-center  p-3 mx-3 top-1/4 h-60 md:w-1/2 md:left-1/4 z-40"
      >
        <Typography
          className="text-center  text-black  md:text-4xl font-semibold md:font-[var(--website-font)]"
          variant="h5"
        >
          Father's Day Special
        </Typography>
        <Typography
          className="text-center text-base font-[var(--website-font)]  md:text-base"
          variant="h6"
        >
          Enjoy Father's Day Special with hand-crafted cakes by Tuileries
          Patisserie.
        </Typography>
        <Button
          variant="contained"
          color="success"
          className=" bg-green-300 w-1/2 h-1/4 text-center text-white font-[var(--website-font)] text-base md:text-lg  "
        >
          See Collection
        </Button>
      </Card>
    </div>
  );
};

export default MiddleSection;
