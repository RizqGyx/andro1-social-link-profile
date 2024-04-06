import React from "react";
import Button from "./Button";

const Card = () => {
  return (
    <div className="flex flex-col items-center bg-card p-10 gap-4 rounded-xl w-11/12 sm:w-full max-w-[400px]">
      <img
        src="user-image.jpg"
        alt="Profile Picture"
        className="rounded-full w-28"
      />
      <div className="text-center flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Muhammad Rizki</h1>
        <h2 className="text-green font-semibold">Bukittinggi, Indonesia 🛡</h2>
      </div>
      <p class="text-center text-sm text-white/50">
        "Undergraduate Informatics Students | Fullstack Web Developer"
      </p>
      <div className="flex flex-col gap-4 w-full text-white">
        <Button
          sosmed={"Instagram"}
          url={"https://www.instagram.com/berzki111/"}
        />
        <Button
          sosmed={"Linkedin"}
          url={"https://www.linkedin.com/in/muhammad-rizki-541131219/"}
        />
        <Button sosmed={"Github"} url={"https://github.com/RizqGyx"} />
        <Button
          sosmed={"Facebook"}
          url={"https://www.facebook.com/profile.php?id=100004602644682"}
        />
      </div>
    </div>
  );
};

export default Card;
