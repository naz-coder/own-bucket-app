import React, { useEffect, useState } from "react";
import { PostStyles } from "./UserPostStyles";
import { db } from "../../firebase";
import {
  collection,
  doc,
  onSnapshot,
} from "firebase/firestore";

const UserPost = ({ postId, userName, kaption, imgSrc }) => {
  const [userComments, setUserComments] = useState([]);
    const [isVisible, setIsVisible] = useState(true); 
    // New state variable to manage visibility

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      const userPostRef = doc(collection(db, "userposts"), postId);
      const userCommentRef = collection(userPostRef, "userComments");

      unsubscribe = onSnapshot(userCommentRef, (snapshot) => {
        const komments = snapshot.docs.map((doc) => doc.data());
        setUserComments(komments);
      });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  return (
    <PostStyles>
      {isVisible && ( // Use isVisible state to conditionally render the post-container
        <div className="card-outter">
        <div className="post-container">
          <img src={imgSrc} className="post-image" />
          <p className="post-text">{kaption}</p>
          <button className="del-btn" onClick={() => setIsVisible(false)}>
            Delete
          </button>
        </div>
        </div>
      )}
    </PostStyles>
  );
};

export default UserPost;

