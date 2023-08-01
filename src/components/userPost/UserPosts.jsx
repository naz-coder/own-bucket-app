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
      <div className="post-container">
        <div className="post-header">
          <h3>{userName}</h3>
        </div>
        <img src={imgSrc} className="post-image" />
        <p className="post-text">{kaption}</p>
      </div>
    </PostStyles>
  );
};

export default UserPost;
