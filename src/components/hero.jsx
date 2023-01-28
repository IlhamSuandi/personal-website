import React from "react";
import Typewriter from "typewriter-effect";

import ilustration from "../images/tes.png";
function Hero() {
  return (
    <section className="w-full h-screen flex flex-col px-[10%] md:flex-row md:pl-[10%] items-center justify-center pt-[96px]  ">
      <div className="w-[100%]">
        <h1 className="text-2xl sm:text-4xl">Hi! I'm Ilham Suandi</h1>
        <div className="text-xl sm:text-2xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString("Fullstack Developer")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </div>
        <p className="py-8 text-xs sm:text-base">
          hi! my name is Ilham Suandi and welcome to my personal website😊
        </p>
      </div>
      <div className="sm:w-screen flex justify-end">
        <img className="" src={ilustration} alt="ilustration" />
      </div>
    </section>
  );
}

export default Hero;
