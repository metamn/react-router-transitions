import React from "react";
import { render } from "@testing-library/react";
import Pricing from "./Pricing";

it("has a Pricing component", () => {
  const { getByText } = render(<Pricing />);
  expect(getByText("Pricing")).toBeInTheDocument();
});
