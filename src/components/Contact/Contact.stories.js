import React from "react";
import Contact from "./Contact";
import ApiDoc from "./Contact.md";

export default {
  component: Contact,
  title: "Contact",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Contact />;
