import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

const style = {
  main: `flex flex-col p-[10px]`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{ position: "relative", maxHeight: "100%", marginBottom: '20px' }}>
      <main
        className={style.main}
        style={{
          maxHeight: "calc(100vh - 100px)",
          overflowY: "auto",
          paddingBottom: "120px",
        }}
      >
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <div
        style={{
          position: "sticky",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        {/* Send Message Compoenent */}
        <SendMessage scroll={scroll} />
      </div>
      <span ref={scroll}></span>
    </div>
  );
};

export default Chat;
