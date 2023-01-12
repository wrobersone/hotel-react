import React from "react";
import LogoWhite from "../assets/img/logo-white.svg";
const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto flex text-white justify-between">
        <a href="/">
          <img src={LogoWhite} alt="" />
        </a>
        Copyright &copy; 2023. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
