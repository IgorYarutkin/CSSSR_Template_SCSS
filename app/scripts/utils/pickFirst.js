export const pickFirstKey = obj => Object.keys(obj)[0];

export const pickFirst = obj => obj[pickFirstKey(obj)];
