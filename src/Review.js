import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
   


  
const checkNumber = (number) => {
  if (number > people.length - 1) {
    return 0;
  }
  if (number < 0) {
    return people.length - 1;
  }
  return number;
};


const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
  });
};
const prevPerson = () => {
  setIndex((index) => {
    let newIndex = index - 1;
    return checkNumber(newIndex);
  });
};


 const randomPerson = () => {
   let randomNumber = Math.floor(Math.random() * people.length);
   if (randomNumber === index) {
     randomNumber = index + 1;
   }
   setIndex(checkNumber(randomNumber));
 };


  return (
    <>
      {" "}
      <section class="text-gray-400   body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            class="w-52 h-52 mb-10 object-cover object-center rounded-full"
            alt={name}
            src={image}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-1 font-medium text-purple-900">
              {name}
            </h1>
            <h1 class="title-font   text-xl mb-4  text-gray-800">{job}</h1>
            <p class="leading-relaxed mb-8"> {text}</p>
            <div class="flex justify-center">
              <button
                onClick={prevPerson}
                class="inline-flex text-purple-800   border-0 py-3 px-3 focus:outline-none hover:bg-purple-300 rounded text-lg"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextPerson}
                class="inline-flex  text-purple-800  border-0 py-3 px-3 focus:outline-none hover:bg-purple-300 rounded text-lg"
              >
                <FaChevronRight />
              </button>
            </div>
            <button
              onClick={randomPerson}
              class="ml-4 mt-2 font-bold inline-flex text-white bg-purple-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Suprise Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
