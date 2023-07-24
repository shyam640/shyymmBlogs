import React from "react";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://linkedin.com/in/itsshyam640"
              className="text-primary hover:underline"
              target="blank"
            >
              @its_shyam640
            </a>
          </p>
          <p>
            Idea{" : "}
            <a
              href="https://google.com/"
              className="text-primary hover:underline"
              target="blank"
            >
              Google
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
