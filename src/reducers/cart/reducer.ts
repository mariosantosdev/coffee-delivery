import { EnumCartReducerAction, Item } from "~/reducers/cart/actions";
import produce from "immer";

export type CartState = {
  items: Array<
    Item & {
      quantity: number;
    }
  >;
  total: number;
  shipping: number;
  paymentMethod: "credit" | "debit" | "cash";
  address: {
    postalCode: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
  };
};

type CartAction = {
  type: keyof typeof EnumCartReducerAction;
  payload?: any;
};

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_ITEM":
      const itemExists = state.items.find((i) => i.id === action.payload.id);
      if (itemExists) {
        return produce(state, (draft) => {
          const item = draft.items.find((i) => i.id === action.payload.id);
          if (item) item.quantity++;
        });
      }

      return produce(state, (draft) => {
        draft.items.push({ ...action.payload, quantity: 1 });
      });

    case "REMOVE_ITEM":
      return produce(state, (draft) => {
        const item = draft.items.find((i) => i.id === action.payload.id);
        if (!item) return draft;
        if (item?.quantity - 1 >= 0) item.quantity--;
      });

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
};
