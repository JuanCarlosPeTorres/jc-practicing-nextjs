"use client";

import { ChangeEvent, useState } from "react";

export default function TaskPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const verifyText = () => {
    const textClean = text.toLowerCase();

    const isPalindrome = textClean === text.split("").reverse().join("");

    setResult(isPalindrome ? "It's palindrome" : "It's not a palindrome");
  };

  const cleanText = () => {
    setText("");
  };

  return (
    <div className="space-y-9">
      <h2 className="text-6xl text-center">Exercise</h2>
      <div className="flex flex-row space-x-2">
        <p>Word:</p>
        <input
          type="text"
          className="border border-black rounded-lg px-2"
          onChange={(e) => handleInput(e)}
          value={text}
        />
      </div>

      <div className="flex justify-center space-x-4">
        <button className="btn-red" onClick={verifyText}>
          Verify
        </button>
        <button className="btn-red" onClick={cleanText}>
          Clear
        </button>
      </div>

      {result && <p className="text-red-800 text-center">{result}</p>}
    </div>
  );
}
