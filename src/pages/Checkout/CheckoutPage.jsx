import { Button, Typography } from "@mui/material";
import * as React from "react";
import CheckoutCard from "../../components/CheckoutCard/CheckoutCard";

const steps = [
  "Produt Selected",
  "Delivry Details",
  "Payment Details",
  "Checkout",
];

export default function CheckoutPage() {
  return (
    <div className="flex flex-col m-8 gap-4">
      <div className="flex justify-between items-center ">
        <Button variant="contained" className=" bg-slate-500 text-white">
          Continue Shopping
        </Button>
        <Button variant="contained" className=" bg-slate-500 text-white">
          Proceed to Checkout
        </Button>
      </div>

      <CheckoutCard />
      <CheckoutCard />
      <CheckoutCard />
      <CheckoutCard />
      <CheckoutCard />
    </div>
  );
}
