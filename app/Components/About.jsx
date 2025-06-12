import {
  faArrowAltCircleDown,
  faContactCard,
  faIcons,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMailchimp,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row font-mono w-full h-full ">
        <div className="w-full h-[378px] bg-gray-800 p-[50px] flex justify-center align-center flex-col gap-5  ">
          <h1 className="flex items-center gap-10">
            <span>
              <FontAwesomeIcon icon={faContactCard} className="text-2xl" />
            </span>
            <span className="text-5xl">Contact me</span>
          </h1>
          <p className="pl-[69px]">
            Have a question or project in mind? Feel free to reach out via
            WhatsApp, LinkedIn, or email.
          </p>
          {/* <FontAwesomeIcon icon={faWhatsapp} className='hover:bg-green-500 h-3 md:h-6 md:w-6'/> */}

          <a
            href="https://wa.me/923150541169"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-full bg-gray-700 hover:bg-green-500 transition-colors"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-2xl text-white"
              fixedWidth
            />
          </a>
        </div>
        <div className="w-full h-[378px] bg-gray-800 p-[50px] flex justify-center align-center flex-col gap-5  ">
          <h1 className="flex items-center gap-10">
            <span>
              <FontAwesomeIcon icon={faContactCard} className="text-2xl" />
            </span>
            <span className="text-5xl">About me</span>
          </h1>
          <p className="pl-[69px]">
            I'm a passionate web developer focused on building modern,
            responsive websites. I enjoy turning ideas into real-world digital
            experiences.
          </p>
          {/* About me page with linkedin logo */}
          <a
            href="https://www.linkedin.com/in/sufiyan-ali-suffynux/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center align-center p-3 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl text-white"
              fixedWidth
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
