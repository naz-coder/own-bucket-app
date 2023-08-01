import React, { useState, useRef } from "react";
import { ImagePickerStyles } from "./ImagePickerStyles";
import Button from "@mui/material/Button";
import { storage, db } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import fileUpload from "../../assets/fileUpload.png";

const ImagePicker = ({ userName }) => {
  const [kaption, setKaption] = useState("");
  const [stage, setStage] = useState(0);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const fileUploadHandler = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadBtnHandler = () => {
    const storageRef = ref(storage, `/images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const stage = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setStage(stage);
      },
      (error) => {
        // error function
        console.log(error);
        alert(error.message);
      },
      () => {
        // complete function
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          try {
            // post img inside the db
            await addDoc(collection(db, "userposts"), {
              timestamp: serverTimestamp(),
              kaption: kaption,
              imgSrc: url,
              userName: userName,
            });
          } catch (error) {
            console.error(error.message);
          }
          setKaption("");
          setStage(0);
          setImage(null);
        });
      }
    );
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
}

  return (
    <ImagePickerStyles>
      <div className="file-picker-container">
      <progress className="stage-bar" value={stage} max="100" />
        <div className="file-container">
        <div className="file-picker">
        <div>
        <h4>Choose a file to upload and press the Upload Button</h4>
        <input
          type="text"
          placeholder="Enter a description..."
          onChange={(e) => setKaption(e.target.value)}
          value={kaption}
          className="kaption-input"
        />
        <br></br>
        {/* <input type="file" onChange={fileUploadHandler} className="choose-file"/> */}
        <div className="fil-upload">
                <input type="file" onChange={fileUploadHandler} className='input-btn' ref={fileInputRef}/>
                <div onClick={openFileDialog} className='custom-input-btn'>Choose file</div>
            </div>
        <br></br>
        <Button onClick={uploadBtnHandler} className="upload-btn">Upload</Button>
        </div>
        </div>
        <div className='upload-hero-img'>
                <img src={fileUpload} className='upload-hero' alt='File upload'/>
            </div>
      </div>
      </div>
    </ImagePickerStyles>
  );
};

export default ImagePicker;
