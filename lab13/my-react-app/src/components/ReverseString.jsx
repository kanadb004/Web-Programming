import React from "react";

const ReverseString = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();

  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? "Palindrome!" : "Not palindrome."}</p>
    </div>
  );
};

export default ReverseString;
