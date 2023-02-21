export enum EnumCartReducerAction {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_CART = "CLEAR_CART",
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

export function actionClearCart() {
  return {
    type: EnumCartReducerAction.CLEAR_CART,
  };
}
