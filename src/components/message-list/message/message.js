export const Message = ({ message }) => {
  return (
    <div>
      <h2>{message.author}</h2>
      <h2>{message.message}</h2>
      <h2>12.03</h2>
      <hr />
    </div>
  );
};
