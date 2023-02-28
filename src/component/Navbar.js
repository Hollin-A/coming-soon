import React from "react";
import zigmaCodeLogo01 from "../assets/zigma-code-logo-01.png";

export const Navbar = () => {
  return (
    <div class="container mx-auto pt-4 text-white flex justify-between items-center px-4 sm:px-0">
      <div class="sm:h-5 h-3 ">
        <img src={zigmaCodeLogo01} class="h-full" alt="zigma code logo" />
      </div>
      <div class="flex items-center font-sans uppercase text-sm sm:text-base font-light">
        <ul class="flex sm:space-x-5 space-x-4">
          <li>
            <a href="#" class="">
              About
            </a>
          </li>
          <li>
            <a href="#" class="">
              Services
            </a>
          </li>
          <li>
            <a href="#" class="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
