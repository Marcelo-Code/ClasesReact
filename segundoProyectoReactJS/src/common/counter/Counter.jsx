import { useState } from "react";

export const Counter = () => {
  const [contador, setContador] = useState(0);
  //[variable, función para modificar el valor de la variable] = useState(0)
  //el valor entre paréntesis en el useState es el valor inicial de la variable

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
};
