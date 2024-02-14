import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20 mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          possimus. Quia, temporibus voluptatum dolorum commodi suscipit esse
          consectetur ipsum perferendis. Excepturi fugiat ad suscipit nulla
          architecto quidem tenetur eaque odit iure exercitationem accusantium
          eveniet neque repudiandae veritatis libero nihil obcaecati pariatur
          recusandae beatae, sapiente soluta voluptatibus iusto nesciunt
          distinctio. Ipsum.
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          iusto ducimus perferendis explicabo voluptatem animi minus labore ad
          accusamus a deleniti, aperiam, voluptatum odit ipsa eum quae est,
          libero quod? Atque consequatur voluptatem aut dicta tenetur
          perspiciatis aspernatur. Nisi veritatis omnis quas quidem quisquam
          suscipit! Minima sit delectus cum nobis!
        </p>
      </div>
    </div>
  );
};

export default About;
