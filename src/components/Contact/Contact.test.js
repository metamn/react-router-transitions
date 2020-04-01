import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact";

it("has a Contact component", () => {
  const { getByText } = render(<Contact />);
  expect(getByText("Contact")).toBeInTheDocument();
});
