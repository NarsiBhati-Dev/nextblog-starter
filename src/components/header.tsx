import React from "react";
import ThemeToggle from "./theme/theme-toggle";
import siteMetadata from "@/data/siteMetadata";

const Header = () => {
  return (
    <header className="flex justify-between items-center my-6">
      <div>{siteMetadata.headerTitle}</div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
