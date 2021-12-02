import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //contexto -> estados globales para compartir con un hook especial
  //la informacion del carrito es global, ya que voy a tener
  //muchos componentes que dependen de esta informacion

  const [cart, setCart] = useState([]);

  //variables globales de cantidad maxima de reserva para distintas marcas de figuras
  const [initialAmount] = useState(1);
  const [maxAmount] = useState(5);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeCart = (id) => {
    setCart(cart.filter((fig) => fig.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((fig) => fig.id === id);
  };

  const countCart = () => {
    return cart.reduce((acc, fig) => acc + fig.amount, 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, fig) => acc + fig.amount * fig.price, 0);
  };

  const incrementAmount = (item) => {
    //busco el elemento en el carro
    const index = cart.findIndex((n) => n.id === item.id);
    if (index !== -1) {
      const actualAmount = cart[index].amount;
      //verificar que se pueda agregar items
      if (actualAmount < maxAmount) {
        let newCart = [...cart];
        newCart[index] = { ...newCart[index], amount: actualAmount + 1 };
        setCart(newCart);
      }
    }
  };

  const decrementAmount = (item) => {
    //busco el elemento en el carro
    const index = cart.findIndex((n) => n.id === item.id);
    if (index !== -1) {
      const actualAmount = cart[index].amount;
      //verificar que se pueda quitar
      if (actualAmount > initialAmount) {
        let newCart = [...cart];
        newCart[index] = { ...newCart[index], amount: actualAmount - 1 };
        setCart(newCart);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        initialAmount,
        maxAmount,

        cart,
        addToCart,
        removeCart,
        isInCart,
        emptyCart,
        totalCart,
        countCart,

        incrementAmount,
        decrementAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
