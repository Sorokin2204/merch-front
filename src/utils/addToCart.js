import { productList } from '../data';

export const addToCart = ({ id }) => {
  let cartData = JSON.parse(localStorage.getItem('cart'));
  if (cartData instanceof Array) {
    const findInCartExist = cartData?.find((itemCart) => itemCart?.productId === id && parseInt(itemCart?.count) > 0);
    if (findInCartExist) {
      findInCartExist.count = parseInt(findInCartExist.count) + 1;
    } else {
      cartData.push({ productId: id, count: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartData));
  } else {
    const newCart = [{ productId: id, count: 1 }];
    localStorage.setItem('cart', JSON.stringify(newCart));
  }
};
