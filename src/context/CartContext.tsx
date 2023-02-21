import { createContext, useContext, useReducer } from "react";
import {
  actionAddItem,
  actionClearCart,
  actionDecreaseItem,
  actionRemoveItem,
  Item,
} from "~/reducers/cart/actions";
import { cartReducer, CartState } from "~/reducers/cart/reducer";

type CartContextType = {
  cart: CartState;
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  decreaseItem: (item: Item) => void;
  clearCart: () => void;
  getQuantity: (item: Item) => number;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

interface CartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    priceTotalItems: 0,
    shipping: 3.5,
    paymentMethod: "credit",
    address: {
      postalCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  const addItem = (item: Item) => dispatch(actionAddItem(item));
  const removeItem = (item: Item) => dispatch(actionRemoveItem(item));
  const decreaseItem = (item: Item) => dispatch(actionDecreaseItem(item));
  const clearCart = () => dispatch(actionClearCart());

  const getQuantity = (item: Item) => {
    const itemInCart = cart.items.find((cartItem) => cartItem.id === item.id);

    return itemInCart ? itemInCart.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        decreaseItem,
        removeItem,
        clearCart,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
