import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import { Input, InputAdornment } from "@mui/material";
import styled from "@emotion/styled";
import { Send } from "@mui/icons-material";
import { sendMessageWithBot, messagesSelector } from "../../store/messages";
import { Message } from "./message";

const InputStyles = styled(Input)`
  color: #9a9fa1;
  padding: 10px 15px;
  font-size: ${(props) => {
    return "15px";
  }};
`;

const IconStyles = styled(Send)`
  color: #2b5278;
`;

// const getBotMessage = () => ({
//   author: "Bot",
//   message: "Hello from bot",
//   date: new Date(),
// });

// const getBotAnswer = (message) => {
//   const answers = {
//     0: "00000",
//     1: "11111",
//   };

//   return answers[message] || "not found answer";
// };

export const MessageList = () => {
  const { roomId } = useParams();
  const dispatch = useDispatch();

  const selector = useMemo(() => messagesSelector(roomId), [roomId]);

  const messages = useSelector(selector);

  const [value, setValue] = useState("");

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessageWithBot(roomId, { message, author }));
        setValue("");
      }
    },
    [dispatch, roomId]
  );

  // useEffect(() => {
  //   const lastMessage = messages[messages.length - 1];
  //   let timerId = null;

  //   if (messages.length && lastMessage?.author === "User") {
  //     timerId = setTimeout(() => {
  //       send(getBotAnswer(lastMessage.message), "Bot");
  //     }, 500);
  //   }

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [send, messages, roomId]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={message.id} roomId={roomId} />
        ))}
      </div>

      <InputStyles
        placeholder="enter message ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handlePressInput}
        fullWidth={true}
        endAdornment={
          <InputAdornment position="end">
            {value && <IconStyles onClick={() => send(value)} />}
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
