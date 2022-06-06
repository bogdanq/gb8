import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (roomId, message) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
});

export const deleteMessage = (roomId, messageId) => ({
  type: DELETE_MESSAGE,
  payload: { roomId, messageId },
});
