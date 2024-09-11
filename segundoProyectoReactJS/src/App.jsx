import { Navbar } from "./layout/navbar/Navbar";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer";
import { Counter } from "./common/counter/Counter";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Counter />
    </div>
  );
}

export default App;
