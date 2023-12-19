import React from "react";
import Translate from "@/Components/Navbar/Translate.jsx";
const SelectLang = () => {
  return (
    <Translate>
      <div
        id="google_translate_element"
        title="Select Language"
        className="relative flex justify-center shrink rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white"
      >
        <img
          src="/static/icons/globe.png"
          alt="Translate Icon"
          className="pointer-events-none cursor-pointer absolute top-1 mx-auto opacity-0 text-center min-w-3 min-h-3 max-w-7 max-h-7 rounded hover:scale-105 transition ease-in-out duration-300 active:scale-[120%]"
        />
      </div>
    </Translate>
  );
};

export default SelectLang;
