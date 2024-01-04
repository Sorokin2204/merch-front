import { productList } from '../data';
import { store } from '../redux/store';

export const totalWeightCart = () => {
  const currentCart = store.getState().app.cart;
  if (currentCart?.length >= 1) {
    const cartSum = currentCart?.map((cart) => cart?.count * cart?.weight).reduce((partialSum, a) => partialSum + a, 0);
    return cartSum;
  } else {
    return 0;
  }
};
