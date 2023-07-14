import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Box, Drawer } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <AppBar className="flex justify-between sticky top-0 bg-[var(--iconicGreen)]  shadow-xl h-[25%] py-5 px-6 xl:py-4 xl:px-14 2xl:px-28  ">
        <Toolbar className="flex justify-between">
          <h1 className="text-white font-[var(--website-font)] text-3xl">
            Pastry Shop
          </h1>

          <div className=" gap-x-7 justify-center hidden  md:visible md:flex">
            <h3 className="text-white cursor-pointer  font-[var(--website-font)] text-2xl">
              Home
            </h3>
            <h3 className="text-white  cursor-pointer  font-[var(--website-font)] text-2xl">
              Shop
            </h3>
            <h3 className="text-white  cursor-pointer  font-[var(--website-font)] text-2xl">
              About Us
            </h3>
            <h3 className="text-white cursor-pointer  font-[var(--website-font)] text-2xl">
              Contact
            </h3>
          </div>

          <div className="flex gap-x-5 ">
            <SearchIcon className="text-white cursor-pointer text-3xl hidden md:block" />
            <ShoppingCartIcon className="text-white  cursor-pointer text-3xl hidden md:block" />
            <DehazeIcon
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="text-white text-3xl cursor-pointer md:hidden"
            />

            {isDrawerOpen && (
              <Drawer
                anchor={"left"}
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(!isDrawerOpen)}
                className="ease-in-out"
              >
                <h1 className="text-3xl text-black">Hellow world</h1>
              </Drawer>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
