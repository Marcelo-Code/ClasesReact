import { Navbar } from "./layout/navbar/Navbar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { CounterContainer } from "./common/counter/CounterContainer";
import { useState } from "react";
import { PruebaGrid } from "./common/pruebaGrid/PruebaGrid";

function App() {
  const [montarComponente, setMontarComponente] = useState(false);
  const montar = () => {
    setMontarComponente(!montarComponente);
  };
  return (
    // <div>
    //   <Navbar />
    //   {montarComponente ? <ItemListContainer /> : null}
    //   <CounterContainer />
    //   <button onClick={montar}>montar/desmontar</button>
    // </div>
    <PruebaGrid />
  );
}

export default App;
