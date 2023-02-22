import { EnumCartReducerAction, Item, Checkout } from "~/reducers/cart/actions";
import produce from "immer";

export type CartState = {
  items: Array<
    Item & {
      quantity: number;
    }
  >;
  total: number;
  priceTotalItems: number;
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
  finished: boolean;
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

          draft.priceTotalItems = draft.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
          }, 0);

          draft.total = draft.priceTotalItems + draft.shipping;
        });
      }

      return produce(state, (draft) => {
        draft.items.push({ ...action.payload, quantity: 1 });

        draft.priceTotalItems = draft.items.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);

        draft.total = draft.priceTotalItems + draft.shipping;
      });

    case "DECREASE_ITEM":
      return produce(state, (draft) => {
        const item = draft.items.find((i) => i.id === action.payload.id);
        if (!item) return draft;
        if (item?.quantity - 1 > 0) {
          item.quantity--;
        } else if (item?.quantity - 1 === 0) {
          item.quantity--;
          const itemIndex = draft.items.findIndex(
            (i) => i.id === action.payload.id
          );
          if (itemIndex >= 0) draft.items.splice(itemIndex, 1);
        }

        draft.priceTotalItems = draft.items.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);

        draft.total = draft.priceTotalItems + draft.shipping;
      });

    case "REMOVE_ITEM":
      return produce(state, (draft) => {
        const itemIndex = draft.items.findIndex(
          (i) => i.id === action.payload.id
        );
        if (itemIndex >= 0) draft.items.splice(itemIndex, 1);

        draft.priceTotalItems = draft.items.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);

        draft.total = draft.priceTotalItems + draft.shipping;
      });

    case "CLEAR_CART":
      return { ...state, items: [], total: 0, priceTotalItems: 0 };

    case "FINISH_ORDER":
      localStorage.removeItem("@coffe-delivery:cart_1.0.0");
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.payments;
        delete action.payload.payments;
        draft.address = action.payload;

        draft.items = [];
        draft.total = 0;
        draft.priceTotalItems = 0;
        draft.finished = true;
      });

    default:
      return state;
  }
};
