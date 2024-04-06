import React from "react";

const Button = ({ sosmed, url }) => {
  return (
    <>
      <a
        href={url}
        className="bg-button text-white text-center py-2 rounded font-medium hover:scale-105 hover:bg-button/75 duration-200"
      >
        {sosmed}
      </a>
    </>
  );
};

export default Button;
