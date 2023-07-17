import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Box, Drawer } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const redirectToDeisiredPage = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar className="flex justify-between bg-opacity-80 bg-clip-padding backdrop-blur-sm sticky top-0 bg-[var(--iconicGreen)]  shadow-xl h-[25%] py-5 px-6 xl:py-4 xl:px-14 2xl:px-28  ">
        <Toolbar className="flex justify-between">
          <h1
            className="text-white font-[var(--website-font)] text-3xl cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Pastry Shop
          </h1>

          <div className="gap-x-7 justify-center  hidden xl:flex ">
            <h3
              className="text-white cursor-pointer  font-[var(--website-font)] text-2xl"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </h3>
            <h3
              className="text-white  cursor-pointer  font-[var(--website-font)] text-2xl"
              onClick={() => {
                navigate("/savory", { state: "savory" });
              }}
            >
              Savory
            </h3>
            <h3
              className="text-white  cursor-pointer  font-[var(--website-font)] text-2xl"
              onClick={() => {
                navigate("/pastry", { state: "pastry" });
              }}
            >
              Pastry
            </h3>
            <h3
              className="text-white  cursor-pointer  font-[var(--website-font)] text-2xl"
              onClick={() => {
                navigate("/gift-hampers", { state: "gift-hampers" });
              }}
            >
              Gift Hamper
            </h3>
            <h3
              className="text-white  cursor-pointer  font-[var(--website-font)] text-2xl"
              onClick={() => {
                navigate("/cookies", { state: "cookies" });
              }}
            >
              Cookies
            </h3>
            <h3
              className="text-white  cursor-pointer  font-[var(--website-font)] text-2xl"
              onClick={() => {
                navigate("/cakes", { state: "cakes" });
              }}
            >
              Cakes
            </h3>
            <h3
              className="text-white  cursor-pointer  font-[var(--website-font)] text-2xl"
              onClick={() => {
                navigate("/about");
              }}
            >
              About Us
            </h3>
            <h3
              className="text-white cursor-pointer  font-[var(--website-font)] text-2xl"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </h3>
          </div>

          <div className="flex gap-x-5 ">
            <SearchIcon className="text-white cursor-pointer text-3xl hidden md:block" />
            <ShoppingCartIcon
              className="text-white  cursor-pointer text-3xl hidden md:block"
              onClick={() => {
                navigate("/checkout");
              }}
            />
            <DehazeIcon
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="text-white text-3xl cursor-pointer xl:hidden"
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
