import { fetchRestaurantRegion } from './services/api';

export const SET_REGIONS = 'SET_REGIONS';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const loadRestaurantRegion = () => async (dispatch) => {
  const data = await fetchRestaurantRegion();

  dispatch({ type: SET_REGIONS, payload: data });
};
