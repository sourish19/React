import { useState, useCallback, useRef, useEffect } from "react";

export default function App() {
  const copyText = useRef(null);

  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    handleChange();
  }, [length, numbersAllowed, specialChar]);

  const handleChange = useCallback(() => {
    let pass = "";
    let passCombination =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const char = "!@#$%^&*()-_=+[]{};:'";
    const num = "1234567890";
    numbersAllowed ? (passCombination += num) : null;
    specialChar ? (passCombination += char) : null;
    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * passCombination.length);
      pass += passCombination.charAt(random);
    }
    setPassword(pass);
  }, [length, numbersAllowed, specialChar, setPassword]);

  const copyToClipboard = (e) => {
    if (copyText.current) {
      const val = copyText.current.value;
      copyText.current.select(); // Select the text
      copyText.current.setSelectionRange(0, 9999); // Select upto 9999
      navigator.clipboard
        .writeText(val)
        .then(() => {
          console.log(`Copied ${val} to clipboard`);
        })
        .catch((err) => console.error("Error occured", err));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg w-[500px]">
        <div className="flex items-center mb-4">
          <input
            ref={copyText}
            type="text"
            value={password}
            readOnly
            className="flex-1 bg-transparent border border-gray-700 text-orange-400 rounded-l-lg px-3 py-2 focus:outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-white"
          >
            copy
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
              className="w-full accent-blue-600"
            />
            <span className="text-orange-400 font-semibold">
              Length ({length})
            </span>
          </div>
          <div className="flex gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                onChange={() => {
                  setNumbersAllowed((prev) => !prev);
                }}
                className="accent-blue-600"
              />
              <span className="text-orange-400">Numbers</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                onChange={() => {
                  setSpecialChar((prev) => !prev);
                }}
                className="accent-blue-600"
              />
              <span className="text-orange-400">Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
