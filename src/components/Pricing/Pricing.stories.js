import React from "react";
import Pricing from "./Pricing";
import ApiDoc from "./Pricing.md";

export default {
  component: Pricing,
  title: "Pricing",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Pricing />;
