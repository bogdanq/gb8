import {
  useEffect,
  memo,
  PureComponent,
  useCallback,
  Component,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MessageList, Layout, ChatList } from "../components";
import { getConversations } from "../store/conversations";
import { getMessages } from "../store/messages";

export const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const conversations = useSelector(
    (state) => state.conversations.conversations
  );

  const messages = useSelector((state) => state.messages.messages);

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);

  useEffect(() => {
    if (!conversations.length) {
      dispatch(getConversations());
    }
  }, [dispatch, conversations]);

  useEffect(() => {
    if (!Object.keys(messages).length) {
      dispatch(getMessages());
    }
  }, [dispatch, messages]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            messages={
              <>
                <h1 style={{ color: "#fff" }}>Выберите чат...</h1>
              </>
            }
            chats={<ChatList />}
          />
        }
      />

      <Route
        path=":roomId"
        element={<Layout messages={<MessageList />} chats={<ChatList />} />}
      />
    </Routes>
  );
};
