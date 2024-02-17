import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20 mb-10">
          Hello, I'm Pavel Petkov, a 26-year-old father recently blessed with a
          baby boy. As a front-end developer, my expertise lies in WordPress,
          backed by completing the SoftUni JS Web Development path last year.
          Proficient in React, Angular, HTML, CSS, JavaScript, NodeJS, and
          Express, I bring a diverse skill set to every project. Beyond coding,
        </p>
        <p className="text-xl">
          I have experience managing a bar and briefly served as a sales
          representative. Having spent 3 to 4 years in bustling London, I've
          returned to my roots in Varna, Bulgaria, where I'm excited to
          contribute to the local tech scene while nurturing my newfound
          fatherhood.
        </p>
      </div>
    </div>
  );
};

export default About;
