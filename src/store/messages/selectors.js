export const messagesSelector = (roomId) => (state) => {
  return state.messages.messages[roomId] ?? [];
};
