import React from "react";
import { useLocation } from "react-router-dom";
import { daySpecialList } from "../../utils/mockData/daysSpecialProductList";

import ProductCategoryCard from "../../components/ProductCategoryCard/ProductCategoryCard";
import {
  Breadcrumbs,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const CategoryPage = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="flex flex-col">
      <div className="relative flex">
        <img
          src="//tuileriespatisserie.in/cdn/shop/files/banner.jpg?v=1679214987"
          alt=""
        />
        {/* <div className="flex justify-center items-center">
          <Typography variant="h1">Cakes</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>

            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>
        </div> */}
      </div>
      <div className="flex flex-col gap-y-4 p-8">
        <Typography>Cakes</Typography>
        <Typography>
          Cakes An entremet is a Modern European cake composed of multiple
          components assembled into layers, encased in a mousse, enrobed with a
          glaze and topped with fine decorations. Entremets come in all
          different colours, shapes and sizes and can showcase a variety of
          flavour combinations. Making an entremet requires the precise
          execution of many traditional French pastry techniques. Entremets are
          an impressive and delectable dessert and would be perfect to celebrate
          a special occasion.
        </Typography>
      </div>

      <div className="flex justify-between items-center m-6  ">
        <FormControl className="w-[50%]">
          <InputLabel id="demo-simple-select-label">Flovour</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-wrap  justify-evenly items-center gap-6 ">
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
        <ProductCategoryCard />
      </div>

      <div className="flex justify-center space-x-1 dark:text-gray-100 my-8">
        <button
          title="previous"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          title="Page 1"
          className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
        >
          1
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
          title="Page 2"
        >
          2
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
          title="Page 3"
        >
          3
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
          title="Page 4"
        >
          4
        </button>
        <button
          title="next"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
