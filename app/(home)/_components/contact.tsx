import React from "react";
import { QuoteButton } from "./contactMe/quoteButton";
import { GreetingButton } from "./contactMe/greetingButton";
import { BookButton } from "./contactMe/bookButton";
import { Send } from "lucide-react";
import Review from "./review";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:darrylyannghm@gmail.com?subject=Project Inquiry";
  };
  return (
    <div className="section flex flex-col justify-center bg-main-400 sticky top-0">
      <div className="min-h-screen p-12 w-full">
        <Review />
      </div>
      {/* Contact Me */}
      <div
        id="contactMe"
        className="min-h-screen p-12 bg-main-300 w-full flex flex-col justify-start space-y-6 md:space-y-12"
      >
        <h3 className="font-bold text-3xl">Contact Me</h3>
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg md:text-xl mb-2">Wanna chat?</h3>
          <h3 className="font-light tracking-tight text-textMain-100/50">
            I&apos;m always excited to hear about new projects and
            opportunities. Feel free to ask me about anything!
          </h3>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-6 justify-start">
          <BookButton />
          <QuoteButton />
          <GreetingButton />
          <div
            className="text-lg flex justify-start items-center hover:cursor-pointer"
            onClick={handleEmailClick}
          >
            <div className="mr-8 p-4 bg-blue-300 rounded-full">
              <Send className="h-6 w-6" />
            </div>
            <div className="tracking-tight font-semibold text-xl ">
              Drop me an email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
