import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I'm a front-end developer from Varna, Bulgaria, with a background
              in React, Angular, and Firebase. I completed the JavaScript Web
              Development path at SoftUni and have been building production web
              applications ever since.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Currently at <span className="text-white font-semibold">Nexern</span>,
              I ship 5–6 live sites per month — integrating AI-assisted
              workflows to cut build time in half while maintaining quality and
              performance across the full stack.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: "Location", value: "Varna, Bulgaria" },
              { label: "Current Role", value: "Front-end Developer @ Nexern" },
              { label: "Education", value: "SoftUni — JS Web Development" },
              { label: "Languages", value: "Bulgarian (native), English (fluent)" },
              { label: "Email", value: "petkovpavel45@gmail.com" },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-3">
                <span className="text-cyan-400 font-semibold min-w-[130px]">{label}:</span>
                <span className="text-gray-300">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
