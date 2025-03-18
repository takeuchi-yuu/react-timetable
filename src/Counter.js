export default Counter = ({ value }) => {
  plus = () => {
    value++;
  };
  minus = () => {
    value--;
  };
  return (
    <div className="Counter">
      <span>{value}</span>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};
