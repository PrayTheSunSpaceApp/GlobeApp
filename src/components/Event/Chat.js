import React from "react";
import styles from "./Event.module.scss";
import avatar from '../shared/assets/avatar.svg';

export const Chat = ({ messages }) => {
  return (
    <ChatLayout>
      <ChatScreen messages={messages} />
    </ChatLayout>
  );
};

export const ChatLayout = ({ children }) => {
  return (
    <div className={styles.chatContainer}>
      <h1 className={styles.chatTitle}>Chat</h1>
      {children}
      <div className={styles.chatSendContainer}>
        <input
          class="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          placeholder="Rage battle cry"
        ></input>
        <button type="button" class="btn btn-dark">
          Send
        </button>
      </div>
    </div>
  );
};

export const ChatScreen = ({ messages }) => {
  return (
    <div className={styles.chatScreen}>
      {messages.map(mess => (
        <div className={styles.messageContainer}>
          <img src={avatar} />
          <span>{mess.name}</span>
          <p>{mess.message}</p>
        </div>
      ))}
    </div>
  );
};
