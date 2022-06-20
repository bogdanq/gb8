import {
  SEND_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
} from "./types";

export const sendMessage = (roomId, message) => {
  return {
    type: SEND_MESSAGE,
    payload: { message, roomId },
  };
};

export const deleteMessage = (roomId, messageId) => ({
  type: DELETE_MESSAGE,
  payload: { roomId, messageId },
});

export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});
