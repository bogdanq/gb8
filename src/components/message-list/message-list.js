import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
import { Input, InputAdornment } from "@mui/material";
import styled from "@emotion/styled";
import { Send } from "@mui/icons-material";
import { Message } from "./message";

const InputStyles = styled(Input)`
  color: #9a9fa1;
  padding: 10px 15px;
  font-size: ${(props) => {
    // console.log("props", props);
    return "15px";
  }};
`;

// const useStyles = makeStyles((ctx) => {
//   return {
//     input: {
// color: "#9a9fa1",
// padding: "10px 15px",
// fontSize: "15px",
//     },
//     icon: {},
//   };
// });

const BOT_MESSAGE = { author: "Bot", message: "Hello from bot" };

export const MessageList = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([BOT_MESSAGE]);

  const ref = useRef();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage?.author === "User") {
      timerId = setTimeout(() => {
        setMessages([...messages, BOT_MESSAGE]);
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages]);

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        { author: "User", message: value, date: new Date().toISOString() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div>
        {messages.map((message, index) => (
          <Message message={message} key={message?.date ?? index} />
        ))}
      </div>

      <InputStyles
        inputRef={ref}
        placeholder="enter message ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handlePressInput}
        fullWidth={true}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={sendMessage} />}
          </InputAdornment>
        }
      />
    </>
  );
};

// MessageList.propTypes = {
//   test1: PropTypes.number.isRequired,
//   test2: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//   }).isRequired,
//   test3: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
