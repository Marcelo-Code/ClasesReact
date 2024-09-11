import Counter from "./Counter";
import { useState } from "react";

export const CounterContainer = () => {
  const [contador, setContador] = useState(0);
  //[variable, función para modificar el valor de la variable] = useState(0)
  //el valor entre paréntesis en el useState es el valor inicial de la variable

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  let childProps = {
    contador: contador,
    sumar: sumar,
    restar: restar,
  };

  return <Counter {...childProps} />;

  //lo puedo hacer también de esta manera, pero es más profesional lo anterior
  //return <Counter contador={contador} sumar={sumar} restar={restar} />;
};
