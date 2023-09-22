import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPhotoFilm } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="md:w-full md:flex-row md:static sticky top-0 z-50 flex flex-row-reverse items-center justify-between w-full h-16 px-4 text-white bg-gray-800">
      <div className="md:hidden w-[10%]"></div>
      <Link
        to="/"
        className="w-[40%] md:w-[20%] flex items-center  md:justify-end gap-2 md:gap-4"
      >
        <span className="md:h-12 md:w-12 flex items-center justify-center w-10 h-10 text-2xl rounded-full">
          <FontAwesomeIcon icon={faPhotoFilm} />
        </span>
        <span className="text-2xl text-blue">SAM_SNY Images</span>
      </Link>
      <div className="flex items-center justify-end md:justify-around w-[20%] md:w-[20%] flex-row-reverse md:flex-row">
        {/* Dropdown button */}
        <div className="relative">
          <button
            className="md:block hidden"
            onClick={toggleDropdown}
          >
            <span className="cursor-pointer">Sign out</span>
          </button>
          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-5 bg-black squared-md shadow-md">
              <ul>
                <li>
                  <Link to="/login">Sign out</Link>
                </li>
                {/* Add more dropdown items if needed */}
              </ul>
            </div>
          )}
        </div>
        <button
          className="rounded-2xl border-[1px] relative flex items-center justify-center w-10 h-10"
          onClick={toggleDropdown}
        >
          <span className={`w-[18px] h-[2px] absolute rounded bg-white ${
            showDropdown ? "translate-y-[5px]" : "-translate-y-[5px]"
          }`}></span>
          <span className={`w-[18px] h-[2px] absolute rounded bg-white ${
            showDropdown ? "-translate-y-[5px]" : "translate-y-[5px]"
          }`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
