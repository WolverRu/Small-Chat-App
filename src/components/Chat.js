import React, { useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";
import { formatRelative } from "date-fns";

/**
 * @author
 * @function Chat
 **/

const Chat = (props) => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid, createdAt }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="avt" className="avt" />
              <p>{text}</p>

              {createdAt?.seconds ? (
                <span>
                  {formatRelative(
                    new Date(createdAt.seconds * 1000),
                    new Date()
                  )}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
};

export default Chat;
