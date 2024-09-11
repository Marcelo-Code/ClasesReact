const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Counter;
