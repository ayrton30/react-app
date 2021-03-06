import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";
import { CartProvider } from "./conext/CartContext";
import { Checkout } from "./components/Checkout/Checkout";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:brand" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
