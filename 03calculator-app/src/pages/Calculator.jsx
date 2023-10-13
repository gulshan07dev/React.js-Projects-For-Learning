import React, { useState } from "react";
import Btn from "../component/Btn";

export default function Calculator() {
  const [value, setValue] = useState("0");

 function handleValue(e) {
   const currentValue = value;
   const input = e.target.innerText;

   if (input === "C") {
     setValue("0");
   } else if (input === "←") {
     // Handle backspace
     setValue(currentValue.slice(0, -1) || "0");
   } else if (input === "=") {
     try {
       const result = eval(value.replace(/%/g, "*0.01"));
       setValue(result.toString());
     } catch (error) {
       setValue("Error");
       console.error(error);
     }
   } else {
     // Check if the last character is an operator or an error message
     if (
       !["+", "-", "*", "/", "%", "Error"].includes(
         currentValue.charAt(currentValue.length - 1)
       )
     ) {
       if (currentValue === "0" || currentValue === "Error") {
         setValue(input);
       } else {
         setValue(currentValue + input);
       }
     } else if (!["+", "-", "*", "/", "%"].includes(input)) {
       // Append the input if it's a number
       setValue(currentValue + input);
     }
   }
 }



  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "/", "%"];
  return (
    <section className="flex flex-col items-center gap-10 bg-gradient-to-b from-gray-900 via-[#18181b] to-[#131315] md:pt-10 pt-5 min-h-screen w-full ">
      {/* welcome section */}
      <h1 className="text-5xl text-white font-semibold">
        Welcome To My Calculator
      </h1>

      <div className="flex flex-col rounded-xl overflow-hidden backdrop-blur-lg shadow-lg sm:w-[450px] w-[100%] h-fit">
        {/* input box */}
        <div>
          <input
            type="text"
            value={value}
            readOnly
            placeholder="0"
            className="w-[100%] p-4 text-3xl text-gray-950 font-[500] bg-white shadow-md"
          />
        </div>
        {/* input btn */}
        <div className="flex justify-center">
          <div className="w-[75%] bg-[#131315] pt-8 grid grid-rows-5 place-items-center  grid-cols-3 gap-y-7 gap-x-2 p-3 pr-0">
            {numbers.map((num) => (
              <Btn
                name={num}
                key={num}
                className="hover:bg-[#3c3e42]"
                onClick={handleValue}
              />
            ))}
            {operators.slice(3, operators.length).map((op) => (
              <Btn
                name={op}
                key={op}
                className="bg-[#29292c]"
                onClick={handleValue}
              />
            ))}
            <Btn
              name="C"
              key="C"
              className="bg-[#29292c]"
              onClick={handleValue}
            />
            <Btn
              name="←"
              key="←"
              className="bg-[#29292c]"
              onClick={handleValue}
            />
          </div>

          <div className="w-[25%] pt-8 bg-[#131315] shadow-md grid grid-rows-5 grid-cols-1 px-6 pl-4">
            {operators.slice(0, 3).map((op) => (
              <Btn
                name={op}
                className="bg-[#29292c]"
                key={op}
                onClick={handleValue}
              />
            ))}
            {/* submit btn */}
            <Btn name="=" className="bg-[#5517ff]" onClick={handleValue} />
          </div>
        </div>
      </div>
    </section>
  );
}
