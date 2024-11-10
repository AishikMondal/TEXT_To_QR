import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handled = () => {
    /*let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);*/

    generateQRCode(text);
  };
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const generateQRCode = (val) => {
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      val
    )}&size=150x150`;
    setQrCodeUrl(apiUrl);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here2");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
      <h1>{props.heading}</h1>
      <div className="mb-5">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-secondary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-warning" onClick={handled}>
        Generate QR
      </button>

      <p>
        <h6>The Number of Word and Letter Is</h6>
      </p>
      <p>
        WORD:- {text.split(" ").length} LETTER:- {text.length}
      </p>
      {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
       <p>
    <footer class="card-header my-150 mx-2">Devoloped By @Aishik</footer>
  </p>
    </div>
  );
}
