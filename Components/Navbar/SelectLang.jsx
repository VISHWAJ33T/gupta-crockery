import React from "react";
import Translate from "@/Components/Navbar/Translate.jsx";
const SelectLang = () => {
  return (
    <Translate>
      <div
        id="google_translate_element"
        title="Select Language"
        className="cursor-pointer w-full flex justify-center items-center shrink rounded-full text-white"
      >
        <img
          // src="/static/icons/translate.png"
          src="/static/icons/google-translate.png"
          alt="translate"
          className="mx-3 pointer-events-none cursor-pointer absolute w-[30px] h-[30px] rounded hover:scale-105 transition ease-in-out duration-300 active:scale-[120%]"
        />
      </div>
    </Translate>
  );
};

export default SelectLang;
