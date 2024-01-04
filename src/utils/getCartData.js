import { productList } from '../data';

export const getCartData = () => {
  const cartLocal = JSON.parse(localStorage.getItem('cart'));
  const cartData = [];
  console.log(cartLocal);
  if (cartLocal instanceof Array) {
    cartLocal?.map((cartItem) => {
      const findProduct = productList?.find((productItem) => productItem?.id === cartItem?.productId);
      if (findProduct && parseInt(cartItem?.count) > 0) {
        cartData?.push({
          count: cartItem?.count,
          ...findProduct,
        });
      }
    });
    return cartData;
  } else {
    return [];
  }
};
