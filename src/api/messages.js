import { child, ref, get, push } from "firebase/database";
import { database } from "./firebase";

// @TODO  сделать санк
export const createMessageApi = (message, roomId) => {
  return push(child(ref(database), `messages/${roomId}`), message);
};

export const getMessagesApi = () => {
  return get(child(ref(database), "messages"));
};
