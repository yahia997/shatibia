import { useState } from "react";

// Css files
import '../styles/search.css';

export default function Search() {
  const [word, setWord] = useState("");

  function handleChange(e) {
    setWord(e.target.value);
  }

  return (
    <div>
      <input
        value={word}
        onChange={handleChange}
        name="word"
        id="word"
      />
      <p>{word}</p>
    </div>
  );
}