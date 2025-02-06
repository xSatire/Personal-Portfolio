import React from "react";
import Achievements from "./achievements";
import { AnimatedScrollArrow } from "./misc/scrolldown";

const About = () => {
  return (
    <div className="section flex flex-col justify-center bg-main-300 relative">
      <div className="min-h-screen flex flex-col justify-center space-y-6 md:space-y-9 p-12 md:px-20">
        <h3 className="font-bold text-3xl">About Me</h3>
        <p className="md:text-xl font-semibold text-wrap">
          Hello! I&apos;m a software engineer who enjoys solving real-world
          problems. From automating mundane tasks to building full-scale
          applications, I&apos;ve done it all. Every day, you will find me
          hacking away at problems to turn ideas into reality. .
        </p>
        <div className="flex flex-col space-y-3">
          <p className="font-semibold">Tech Stack</p>
          <p className="text-textMain-200 font-light">
            I am proficient in Python, Flask, Django, FFMpeg, Java, Javascript,
            Typescript, React, NextJs, Dart, Flutter, Bash, HTML and CSS. So
            yes, I can pretty much do it all.
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="font-semibold">On a Personal Note</p>
          <p className="text-textMain-200 font-light">
            I grew up in a cultural melting pot called Singapore. Being half
            indonesian, half Chinese, I can actually speak 3 languages!{" "}
            {"(Not really, my indonesian is horrendous)"} In December, you will
            most likely find me frolicking in the land of sushi and enjoying the
            powdered snow of Niseko.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <AnimatedScrollArrow />
        </div>
      </div>
    </div>
  );
};

export default About;
