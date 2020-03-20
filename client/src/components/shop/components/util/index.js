export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const getSessionStorageUpdateCart = (cartProducts, cartTotal) => {
    const cartProductsLs = JSON.parse(sessionStorage.getItem('cartProducts'));
    const cartTotalLs = JSON.parse(sessionStorage.getItem('cartTotal'));
      if(cartProductsLs && cartTotalLs){
        if(cartProductsLs.length > 0){
          Object.assign(cartProducts, cartProductsLs);
          Object.assign(cartTotal, cartTotalLs);
        }
    }
}

export const updateSessionStorage = (cartProducts, cartTotal) => {
      sessionStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      sessionStorage.setItem('cartTotal', JSON.stringify(cartTotal));
}
