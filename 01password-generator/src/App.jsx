import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [length, setLength] = useState(7);
  const [isNumberAllow, setIsNumberAllow] = useState(false);
  const [isCharAllow, setIsCharAllow] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumberAllow) {
      str += "1234567890";
    }

    if (isCharAllow) {
      str += "@#$%&";
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);
  }, [length, isNumberAllow, isCharAllow, setPassword]);

  const handleCopy = function ()   {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select(); 
    alert("Copied the text: " + password);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllow, isCharAllow, setPassword]);

  return (
    <section className="flex justify-center pt-20 bg-gray-900 min-h-screen">
      <div className="md:w-[500px] w-[95%] bg-gray-800 h-fit shadow-xl px-8 py-14 rounded-sm flex flex-col gap-5">
        <h1 className="text-center text-3xl text-orange-500 font-bold">
          Password Generator
        </h1>
        <div className="w-[100%] flex flex-col gap-5">
          {/* show generated password */}
          <div className="w-[100%] flex justify-between bg-slate-100 rounded-md overflow-hidden">
            <input
              type="text"
              value={password}
              ref={passwordRef}
              readOnly
              className="w-[70%] bg-transparent outline-none text-base font-semibold px-2"
            />
            <button
              className="px-4 py-2 w-[25%] bg-blue-500 text-white hover:opacity-75 text-base font-semibold"
              onClick={handleCopy}
            >
              copy
            </button>
          </div>
          {/* slider range */}
          <div className="p-3 rounded-sm shadow-sm bg-yellow-50 flex flex-col gap-2">
            <div className="text-lg text-gray-700 font-bold">
              Select Length: {/* show selected value */}
              <span className="font-medium text-blue-700">{length}</span>
            </div>
            <input
              type="range"
              min={0}
              max={16}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
          </div>
          {/* boolean value */}
          <div className="p-3 rounded-sm shadow-sm bg-yellow-300 pb-5 flex flex-col gap-3">
            <div className="text-lg text-gray-800 font-bold">
              Select Characteristic: {/* show selected value */}
              <span className="font-sem\ text-base text-blue-700">{`Number: ${isNumberAllow}, Char: ${isCharAllow}`}</span>
            </div>
            {/* number checkbox */}
            <div className="flex justify-between">
              <div className="p-3 rounded-sm shadow-md bg-white flex  flex-row-reverse justify-center px-3 gap-4 w-[45%]">
                <label
                  htmlFor="number"
                  className="text-lg text-gray-700 font-bold cursor-pointer"
                >
                  Number
                </label>
                <input
                  type="checkbox"
                  id="number"
                  defaultChecked={isNumberAllow}
                  onChange={() => setIsNumberAllow((state) => !state)}
                  className="cursor-pointer"
                />
              </div>
              {/* character checkbox */}
              <div className="p-3 rounded-sm shadow-md bg-white flex  flex-row-reverse justify-center px-3 gap-4 w-[45%]">
                <label
                  htmlFor="char"
                  className="text-lg text-gray-700 font-bold cursor-pointer"
                >
                  Character
                </label>
                <input
                  type="checkbox"
                  id="char"
                  defaultChecked={isCharAllow}
                  onChange={() => setIsCharAllow((state) => !state)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
