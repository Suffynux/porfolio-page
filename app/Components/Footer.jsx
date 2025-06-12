import React from "react";

const Footer = () => {
  return <>
  
  <section className="max-w-full bg-gray-950 font-mono">
    <footer>
      <div className="p-5  text-center">
        <p className="text-sm sm:text-xl text-gray-500">© {new Date().getFullYear()} Suffynux. All rights reserved.</p>

        <p className="pt-3">Made with love by <span className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500 decoration-double">Suffynux</span></p>
      </div>
    </footer>
  </section>
  
  </>;
};

export default Footer;
