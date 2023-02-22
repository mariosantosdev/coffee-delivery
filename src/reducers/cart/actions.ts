export enum EnumCartReducerAction {
  ADD_ITEM = "ADD_ITEM",
  DECREASE_ITEM = "DECREASE_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_CART = "CLEAR_CART",
  FINISH_ORDER = "FINISH_ORDER",
}

export type Item = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
};

export function actionAddItem(item: Item) {
  return {
    type: EnumCartReducerAction.ADD_ITEM,
    payload: item,
  };
}

export function actionRemoveItem(item: Item) {
  return {
    type: EnumCartReducerAction.REMOVE_ITEM,
    payload: item,
  };
}

export function actionDecreaseItem(item: Item) {
  return {
    type: EnumCartReducerAction.DECREASE_ITEM,
    payload: item,
  };
}

export function actionClearCart() {
  return {
    type: EnumCartReducerAction.CLEAR_CART,
  };
}

export type Checkout = {
  complement?: string | undefined;
  number: number;
  street: string;
  neighborhood: string;
  postalCode: string;
  city: string;
  state: string;
  payments: "credit" | "debit" | "cash";
};

export function actionFinishOrder(checkout: Checkout) {
  return {
    type: EnumCartReducerAction.FINISH_ORDER,
    payload: checkout,
  };
}
