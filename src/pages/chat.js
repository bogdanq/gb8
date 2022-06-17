import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MessageList, Layout, ChatList } from "../components";
import { getConversations } from "../store/conversations";

export const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const conversations = useSelector(
    (state) => state.conversations.conversations
  );

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

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            messages={<h1 style={{ color: "#fff" }}>Выберите чат...</h1>}
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
