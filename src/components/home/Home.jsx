import React, { useEffect, useState } from "react";
import {HomeStyles} from "./HomeStyles";
import UserPost from "../../components/userPost/UserPosts";
import { auth, db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Box, Button, Modal, Input } from "@mui/material";
import ownboxLogo from "../../assets/ownboxLogo.jpg";
import ImagePicker from "../../components/pickImage/ImagePicker";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Footer from "../footer/Footer";

const Home = () =>{
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [userposts, setUserPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

  // User authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user has logged in
        console.log(user);
        setUser(user);
      } else {
        // user has logged out
        setUser(null);
      }
    });
    return () => {
      // perform some cleanup actions
      unsubscribe();
    };
  }, [user, userName]);

  // Fetching data from the Firestore database
  useEffect(() => {
    const colRef = collection(db, "userposts");
    onSnapshot(colRef, (snapshot) => {
      setUserPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  // Signup handler  function
  const signUpHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((crtd) => {
        console.log("User created:", crtd.user);
        // After signing up, update the user's profile to set the "displayName"
        return updateProfile(crtd.user, {
          displayName: userName,
        });
      })
      .then(() => {
        // After updating the profile, set the "user" state
        setUser(auth.currentUser);
        setOpen(false);
      })
      .catch((error) => alert(error.message));
  };
  // Login handler  function
  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((crtd) => {
        return updateProfile(auth.currentUser, {
          displayName: userName,
        }).then(() => {
          console.log("User logged in:", crtd.user);
          setOpenLogin(false);
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const filteredUserPosts = userposts.filter((post) => {
    // Check if a user is logged in and the post belongs to the user
    return user && post.post.userName === user.displayName;
  });

  return (
    <HomeStyles>
    <div className="App">
      {/* Signup modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <form className="sign-up-form">
            <center>
              {/* <img
                src={ownboxLogo}
                className="app-logo-modal"
                alt="app-logo"
              /> */}
            </center>
            <Input
              placeholder="Username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              placeholder="example@gmail.com"
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <br></br>
            <Button onClick={signUpHandler} className="sign-up-btn">Sign up</Button>
          </form>
        </Box>
      </Modal>

      {/* Login or Signup modal */}
      <Modal open={openLogin} onClose={() => setOpenLogin(false)}>
        <Box sx={style}>
          <form className="login-form">
            <center>
              {/* <img
                src={ownboxLogo}
                className="app-logo-modal"
                alt="app-logo"
              /> */}
            </center>
            <Input
              placeholder="example@gmail.com"
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <br></br>
            <Button onClick={loginHandler} className="log-in-btn">Login</Button>
          </form>
        </Box>
      </Modal>

      {/* Header */}
      <div className="header-container">
        <div><img src={ownboxLogo} className="app-logo" alt="app-logo" /></div>
      <div>
      {user ? (
        <Button onClick={() => auth.signOut()} className="log-in-btn">Logout</Button>
      ) : (
        <div className="login-container">
          <Button onClick={() => setOpenLogin(true)} className="log-in-btn">Login</Button>
          <Button onClick={() => setOpen(true)} className="sign-up-btn">Sign up</Button>
        </div>
      )}
      </div>
    </div>

    <div className='landing-content'>
        <div>
        <h1>WELCOME TO OWN BOX FILE SYSTEM</h1>
        <p>You upload... We manage...</p>
        </div>
       </div>
      {/* Option chaining with ?. in place of Try Catch */}
      {user?.email ? (
        <ImagePicker userName={user.displayName} />
      ) : (
        <h3 className="error-msg">Please, you must login to upload a file.</h3>
      )}

      <div className="postings-container">
     <div className="user-postings">
    {filteredUserPosts.map(({ id, post }) => (
      <UserPost
        key={id}
        postId={id}
        user={user}
        userName={post.userName}
        kaption={post.kaption}
        imgSrc={post.imgSrc}
      />
    ))}
  </div>

      </div>
      {/* <Footer/> */}
    </div>
    </HomeStyles>
  );
}

export default Home;
