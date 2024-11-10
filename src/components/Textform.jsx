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
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
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
      <button className="btn btn-primary mx-2" onClick={handled}>
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
    <footer class=" my-29 mx-0 m badge text-bg-secondary">Devoloped by @Aishik</footer>
  </p>
    </div>
  );
}
