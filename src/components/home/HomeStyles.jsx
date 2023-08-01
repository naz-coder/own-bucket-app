import { styled } from "styled-components";

export const HomeStyles = styled.div`
.header-container{
    background-color: #ffffff;
    padding: 20px;
    object-fit: contain;
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
}

  .app-logo {
    max-width: 150px;
    width: 100%;
    height: auto;

  }

  .landing-content{
    font-weight: 900;
    font-size: 1.5rem;
    padding: 2rem 1rem;
    text-align: center;
  }

  .postings-container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-postings{
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5%;
    grid-row-gap: 1%;
  }

  .log-in-btn{
    background-color: #454253;
    transition: all 0.5s ease-out;
    background-position: right bottom;
    color: #ffffff;
    border: 1px solid #454253;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    padding: 0.4rem 4rem;
    margin: 0.5rem 1rem;
    font-weight: 900;
    font-size: 1rem;
    width: 5rem;
    text-transform: capitalize;
  }

  .log-in-btn:hover {
    background-color: #7e7799;
    border: 1px solid #7e7799;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  .sign-up-btn{
    background-color: #ffdd54;
    transition: all 0.5s ease-out;
    background-position: right bottom;
    color: #000000;
    border: 1px solid #ffdd54;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    padding: 0.4rem 1rem;
    margin: 0.5rem 1rem;
    font-weight: 900;
    font-size: 1rem;
    width: 13rem;
    text-transform: capitalize;
  }

  .sign-up-btn:hover {
    background-color: #caa81d;
    border: 1px solid #caa81d;
    background-position: left bottom;
    transition: all 0.5s ease-in;
    cursor: pointer;
  }

  .error-msg{
    color: #d83b27;
    text-align: center;
    padding-top: 1rem;
    font-weight: 500;
  }

@media only screen and (max-width: 1024px){
  .user-postings{
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 768px){
  .landing-content h1{
    font-size: 2rem;
  }

  .landing-content p{
    font-weight: 500;
  }

  .user-postings{
    grid-template-columns: 1fr;
    grid-gap: 0.5%;
  }


}

`;