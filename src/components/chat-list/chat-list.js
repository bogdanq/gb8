import { List, Button } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  createConversation,
  deleteConversation,
} from "../../store/conversations";
import { Chat } from "./chat";
import { useCallback } from "react";

export const ChatList = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { conversations, pending } = useSelector(
    (state) => state.conversations
  );

  const createConversationByName = () => {
    const name = prompt("Введите название комнаты");
    const isValidName = !conversations.includes(name);

    if (!!name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Не валидная комната");
    }
  };

  const deleteConversationByName = useCallback(
    (conversation, e) => {
      e.preventDefault();
      dispatch(deleteConversation(conversation));
      navigate("/chat");
    },
    [dispatch, navigate]
  );

  return (
    <List component="nav">
      <Button color="info" onClick={createConversationByName}>
        create room
      </Button>

      {pending ? (
        <h2>pending...</h2>
      ) : (
        conversations.map((chat) => (
          <Link key={chat} to={`/chat/${chat}`}>
            <Chat
              title={chat}
              selected={roomId === chat}
              deleteConversationByName={deleteConversationByName}
            />
          </Link>
        ))
      )}
    </List>
  );
};
