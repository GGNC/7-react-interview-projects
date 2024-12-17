import { useState } from "react";
import TypewriterEffect from "../components/TypewriterEffect";

function HomePage() {
  const [inputText, setInputText] = useState("");
  const [text, setText] = useState("");
  const handleClick = () => {
    setText(inputText);
  };
  return (
    <div className="page-container">
      <h1 className="header">Typewriter</h1>
      <div className="form-container">
        <input
          className="form_input"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="form_button" onClick={handleClick}>
          Type
        </button>
      </div>
      {text && <TypewriterEffect text={text} />}
    </div>
  );
}

export default HomePage;
