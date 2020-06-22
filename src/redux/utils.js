import { createSelector } from 'reselect';

import { RUR_COURSES } from '../redux/constants';

export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const getAverage = (arr) =>
  arr.reduce((acc, rating) => acc + rating) / arr.length;

const idSelector = (_, props) => props.id;

export const getById = (selector) =>
  createSelector(selector, idSelector, (entity, id) => entity[id]);

export const mapToArray = (selector) => createSelector(selector, Object.values);

export const printPrice = (is_rur, total) =>
  is_rur ? `${total * RUR_COURSES} RUR` : `${total} $`;
