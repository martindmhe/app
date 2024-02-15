import React from "react";
import "./Upload.css";
import { useState } from "react";

function Uploadpage() {

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0])
  }

  const handleUpload = () => {
    if (!uploadedFile) {
      alert("Upload a file first!");
      return;
    }

    const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const jsonFile = JSON.parse(e.target.result)
          console.log(jsonFile)
          sendJSONToServer(jsonFile)
        } catch (e) {
          console.log(e)
        }

      }

    reader.readAsText(uploadedFile);
    
    
  }

  const sendJSONToServer = (jsonFile) => {
    fetch('http://127.0.0.1:3000/upload-messages/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(jsonFile)
    })
  }

  return (
    <>
      <div className="upload-container">
        <input type="file" id="json-upload" accept=".json" onChange={handleFileChange}/>
        <button onClick={handleUpload}>Submit File</button>
      </div>
      
    </>
  );
}

export default Uploadpage;
