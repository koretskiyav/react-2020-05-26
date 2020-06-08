export const getAmountFromState = (product = {}) => product.amount || 0;

export const cloneObjWithoutKey = (obj, key) => {
  let newObj = {
    ...obj,
  };

  delete newObj[key];

  return newObj;
};
