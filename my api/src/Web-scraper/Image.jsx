import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (file) {
      const fileType = file?.type?.split("/")?.[0];
      if (fileType === "image") {
        const reader = new FileReader();
        reader.onload = (e) => setImage(e.target.result);
        reader.readAsDataURL(file);
      } else {
        alert("Only image files are allowed.");
        setFile(null);
      }
    }
  }, [file]);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleDrop(e) {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function triggerFileInput() {
    document.getElementById("imageInput").click();
  }

  return (
    <div className="app-container">
      <h2 className="app-heading">Upload Image</h2>

      <div
        className="dropzone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={triggerFileInput}
      >
        <p>Drag & Drop image here or click to upload</p>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleChange}
          hidden
        />
      </div>

      {image && (
        <div className="preview-container">
          <div className="edit-icon" onClick={triggerFileInput}>
            ✏️
          </div>
          <img src={image} alt="preview" className="image-preview" />
        </div>
      )}
    </div>
  );
}

export default App;