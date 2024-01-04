import { productList } from '../data';

export const deleteFromCart = ({ id }) => {
  let cartData = JSON.parse(localStorage.getItem('cart'));
  if (cartData instanceof Array) {
    const findDeletedItem = cartData?.findIndex((cartDataItem) => cartDataItem.productId === id);
    if (findDeletedItem !== -1) {
      cartData.splice(findDeletedItem, 1);
      localStorage.setItem('cart', JSON.stringify(cartData));
    }
  }
};
