import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <ItemListContainer productID="Item 1" description="lorem1lorem1" />
        <ItemListContainer productID="Item 2" description="lorem2lorem1" />
        <ItemListContainer productID="Item 3" description="lorem3lorem1" />
      </div>
    </div>
  );
}

export default App;
