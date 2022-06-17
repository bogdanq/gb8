import { child, ref, get, set, remove } from "firebase/database";
import { database } from "./firebase";

export const createConversationApi = (conversation) => {
  return set(
    child(ref(database), `conversations/${conversation}`),
    conversation
  );
};

export const getConversationsApi = () => {
  return get(child(ref(database), "conversations"));
};

export const removConversationApi = (conversation) => {
  return remove(child(ref(database), `conversations/${conversation}`));
};
