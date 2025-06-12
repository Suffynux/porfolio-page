import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Hero = () => {
  return (
    <main className="font-mono w-full block ">
      <section className="bg-[url(/Images/hero-banner.png)] min-h-screen w-full h-full">
        <div className="text-center pt-10">
          <h1 className="text-xd md:text-2xl hover:bg-gray-800 hover:font-medium">
            <span className="text-s md:text-[100px] bold italic ">Hi,</span> I
            am a professional Web developer{" "}
          </h1>
        </div>
      </section>
      <div className="text-center w-full bg-gray-900 h-40 text-2xl md:text-6xl flex flex-col justify-center  items-center gap-4">
        <h1>
          What <span className="font-medium">i can</span> do for{" "}
          <span>You</span>
        </h1>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sufiyan-ali-suffynux/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="h-3 md:h-6 md:w-6 text-gray-600 hover:text-white"
            />
          </a>
          <a href="https://www.facebook.com/sufyan.sufi.9634/" target="_blank">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="h-3 w-3 md:h-4 md:w-4 text-gray-600 hover:text-white"
            />
          </a>
          <a href="https://www.instagram.com/suffynux/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-3 md:h-6 md:w-6 text-gray-600 hover:text-white"
            />
          </a>

          <a href="https://github.com/Suffynux/" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="h-3 md:h-6 md:w-6 text-gray-600 hover:text-white"
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;

