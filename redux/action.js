import {
  fetchRegions,
  fetchCategories,
} from '../services/api';

export function setRegions(regions) {
  return { type: 'setRegions', payload: { regions } };
}

export function setCategories(categories) {
  return { type: 'setCategories', payload: { categories } };
}

export function changeRegionName(regionName) {
  return { type: 'changeRegionName', payload: { regionName } };
}

export function changeCategoryId(categoryId) {
  return { type: 'changeCategoryId', payload: { categoryId } };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
