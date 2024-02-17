import React, {useState} from "react";
import "./Choices.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceMeh,
  faFaceGrinStars,
  faFaceSadTear,
  faFaceSmile,
  faFaceKissWinkHeart,
  faCopy
} from "@fortawesome/free-solid-svg-icons";

function Choices() {
const [selectedOption, setSelectedOption] = useState("Neutral")  
const [inputText, setInputText] = useState("No Input")  
const [textLength, setLength] = useState("Short")  
const [generatedMessage, setGeneratedMessage] = useState("Ready to craft the perfect response... ")

const onValueChange = e => {
    setSelectedOption(e.target.value)
}

const onLengthChange = e => {
  setLength(e.target.value)
}

const getInput = e => {
    setInputText(e.target.value)
}

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    alert('Error copying to clipboard');
  }
};

const generateMessage = (inputText) => {
  fetch(`http://127.0.0.1:3000/test-openai?data=${encodeURIComponent(JSON.stringify({message: inputText, tone: selectedOption, length: textLength}))}`)
  .then(res => res.text())
  .then(data => setGeneratedMessage(data))
  .catch(error => console.log(error))
}

  return (
    <>
    <div className="Choice_container">
      
    <div className="search">
        <input placeholder="Enter the text you are responding to..." type="text" onChange={getInput}></input>
        <button type="submit" onClick={() => generateMessage(inputText)}>Go</button>
        
      </div>


      <div className="wrapper" style={{width: "40vw"}}>
        <div className="option">
          <input className="input" type="radio" name="tone" value="Neutral" onClick={onValueChange} defaultChecked></input>
          <div className="btn">
            <span className="span">Neutral</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="tone" onClick={onValueChange} value="Professional"></input>
          <div className="btn">
            <span className="span">Professional</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="tone" onClick={onValueChange}value="Apologetic"></input>
          <div className="btn">
            <span className="span">Apologetic</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="tone" onClick={onValueChange} value="Excited"></input>
          <div className="btn">
            <span className="span">Excited</span>
          </div>
        </div>
      </div>

      <div className="wrapper" style={{width: "20vw"}}>
        <div className="option">
          <input className="input" type="radio" name="length" value="short" onClick={onLengthChange} defaultChecked></input>
          <div className="btn">
            <span className="span">Short</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="length" onClick={onLengthChange} value="medium"></input>
          <div className="btn">
            <span className="span">Medium</span>
          </div>
        </div>
        <div className="option">
          <input className="input" type="radio" name="length" onClick={onLengthChange}value="long"></input>
          <div className="btn">
            <span className="span">Long</span>
          </div>
        </div>
      </div>

      <br></br>
      <div className ="output">
        <br></br>
        <div className="speaker1">
        <FontAwesomeIcon className="speakericons" style={{marginLeft: '30px', color: "#637882"}} icon={faFaceKissWinkHeart} />
        <div className="generatedMessage" style={{backgroundColor: '#cdd6e0', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', borderBottomRightRadius: '20px'}}>
        {inputText === "" ? <p>Enter the text you are responding to...</p>: <p>{inputText}</p>}
        </div>
        </div>

        <div className="speaker2">
        <div className="generatedMessage" style={{backgroundColor: '#ebd5e7', whiteSpace: 'pre-wrap', overflowWrap: 'break-word', borderBottomLeftRadius: '20px'}}>
            <p>{generatedMessage}</p> 
            {generatedMessage == "Ready to craft the perfect response... "? <></>:<FontAwesomeIcon icon={faCopy} className="copy" onClick={() => copyToClipboard(generatedMessage)} />}
        </div>

        {selectedOption === "Neutral" && <FontAwesomeIcon className="speakericons" style={{ color: "#a3799c", marginRight: '30px'}} icon={faFaceMeh} />}
        {selectedOption === "Professional" && <FontAwesomeIcon className="speakericons" style={{ color: "#a3799c", marginRight: '30px'}} icon={faFaceSmile} />}
        {selectedOption === "Excited" && <FontAwesomeIcon className="speakericons"  style={{ color: "#a3799c", marginRight: '30px'}} icon={faFaceGrinStars} />}
        {selectedOption === "Apologetic" && <FontAwesomeIcon className="speakericons" style={{ color: "#a3799c", marginRight: '30px'}} icon={faFaceSadTear} />}
        </div>
      {/* <center>
        {generatedMessage == "Ready to craft the perfect response... "? <></>:<><button className="copy" onClick={() => copyToClipboard(generatedMessage)}>Copy Response</button></>}
        </center> */}
      </div>
      
      </div>
    </>
  );
}

export default Choices;
