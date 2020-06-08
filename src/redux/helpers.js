export const getAmountFromState = (product = {}) => product.amount || 0;

export const cloneObjWithoutKey = (obj, key) => {
  const clone = { ...obj };

  delete clone[key];

  return clone;
};
