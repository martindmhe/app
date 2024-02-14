import React, {useState} from "react";
import "./Choices.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceMeh,
  faFaceGrinStars,
  faFaceSadTear,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

function Choices() {
const [selectedOption, setSelectedOption] = useState("Neutral")  
const [inputText, setInputText] = useState("No Input")  
const onValueChange = e => {
    setSelectedOption(e.target.value)
}

const getInput = e => {
    setInputText(e.target.value)
}
  return (
    <>
    <div className="Choice_container">
    <div class="search">
        <input placeholder="Enter the text you are responding to..." type="text" onChange={getInput}></input>
        <button type="submit">Go</button>
      </div>


      <div className="wrapper">
        <div className="option">
          <input className="input" type="radio" name="btn" value="Neutral" checked={selectedOption === "Neutral"} onClick={onValueChange} defaultChecked></input>
          <div className="btn">
            <span className="span">Neutral</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="btn" checked={selectedOption === "Professional"} onClick={onValueChange} value="Professional"></input>
          <div className="btn">
            <span className="span">Professional</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="btn" checked={selectedOption === "Apologetic"} onClick={onValueChange}value="Apologetic"></input>
          <div className="btn">
            <span className="span">Apologetic</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="btn" checked={selectedOption === "Excited"} onClick={onValueChange} value="Excited"></input>
          <div className="btn">
            <span className="span">Excited</span>
          </div>
        </div>
      </div>
      <br></br>
      <div className ="output">
        <div className="inputMessage" style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
        {inputText == "" ? <p>Enter the text you are responding to...</p>: <p>{inputText}</p>}
        </div>
        <div className="generatedMessage" style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
            <p>Generating...</p> 
        </div>

        {selectedOption == "Neutral" && <FontAwesomeIcon icon={faFaceMeh} />}
        {selectedOption == "Professional" && <FontAwesomeIcon icon={faFaceSmile} />}
        {selectedOption == "Excited" && <FontAwesomeIcon icon={faFaceGrinStars} />}
        {selectedOption == "Apologetic" && <FontAwesomeIcon icon={faFaceSadTear} />}

      </div>

      
      </div>
    </>
  );
}

export default Choices;
