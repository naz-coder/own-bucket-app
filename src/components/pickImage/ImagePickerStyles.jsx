import { styled } from "styled-components";

export const ImagePickerStyles = styled.div`
  .file-picker-container {
    display: flex;
    flex-direction: column;
    width: 60%;
    /* width: 15rem; */
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 30px;
    background-color: #ffffff;
    border-top: 1px solid #c5c5c5;
    padding: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  }

    .file-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
      column-gap: 5%;
  }

  .file-picker{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .stage-bar {
    width: 100%;
    padding: 0.9rem;
    accent-color: #027202;
    margin-bottom: 0.5rem;
  }

  h4{
    padding-bottom: 1rem;
  }

  .kaption-input {
    font-size: 1.2rem;
    color: #000000;
    padding-left: 0.7rem;
    height: 3rem;
    margin-bottom: 1.5rem;
    width: 30rem;
    height: 3rem;
    border: 1px solid #aeb1b3;
    font-family: "Archivo Narrow", sans-serif;
    font-family: "Fira Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    font-family: "Zen Kurenaido", sans-serif;
    border-radius: 0.3rem;
  }

  .kaption-input:focus {
    outline: none;
  }

  .kaption-input::placeholder {
    color: #333333;
  }

  
  input.input-btn{
    display: none;
  }

  .custom-input-btn{
    background-color: #ffdd54;
    border: 1px solid #ffdd54;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.55rem 1rem;
    margin-top: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: 454253;
    font-size: 1.2rem;
  }

  .custom-input-btn:hover {
    background-color: #caa81d;
    border: 1px solid #caa81d;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    translate: 0.5s;
    cursor: pointer;
  }

  button.upload-btn {
    background-color: #2E444E;
    border: 1px solid #2E444E;
    background-position: right bottom;
    transition: all 0.5s ease-in;
    padding: 0.55rem 2rem;
    margin-top: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: white;
    font-size: 1.2rem;
    width: 100%;
    text-transform: capitalize;
  }

  button.upload-btn:hover {
    background-color: #1a2b33;
    border: 1px solid #1a2b33;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    translate: 0.5s;
    cursor: pointer;
  }

  .upload-hero{
    width: 100%;
    height: auto;
    max-width: 500px;
  }

  @media only screen and (max-width: 1300px) {
    .file-container {
    display: block;
  }

  .kaption-input {
    width: 100%;
  }

  input.input-btn{
    display: none;
  }

  .custom-input-btn{
    width: 100%;
    padding: 0.55rem 0rem;
  }

  button.upload-btn {
    width: 100%;
    padding: 0.55rem 0rem;
  }

  }

  @media only screen and (max-width: 960px) {
    .file-picker-container {
width: 80%;
    }
  }

  @media only screen and (max-width: 425px) {
  }
`;
