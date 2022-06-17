import classNames from "classnames";
import { Button } from "@mui/material";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import styles from "./message.module.css";

export function Message({ message, roomId }) {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>{format(message?.date, "yyyy-MM-dd HH:mm:ss")}</p>

      <Button color="info" onClick={() => dispatch(deleteMessage(roomId, message.id))}>
        x
      </Button>
    </div>
  );
}
