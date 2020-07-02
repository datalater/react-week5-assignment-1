import { fetchInitRegions, fetchInitCategories } from './api';

import { regions, categories, restaurants } from '../../__fixture__/data';

function onFetch(data) {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(data),
  }));

  beforeEach(() => {
    fetch.mockClear();
  });
}

async function fetchRestaurants(regionName, categoryId) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${regionName}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

describe('api', () => {
  describe('fetchInitRegions', () => {
    it('fetch initRegions', async () => {
      onFetch(regions);

      const rate = await fetchInitRegions();

      expect(rate).toEqual(regions);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
  describe('fetchInitCategories', () => {
    it('fetch initCategories', async () => {
      onFetch(categories);

      const rate = await fetchInitCategories();

      expect(rate).toEqual(categories);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
  describe('fetchRestaurants', () => {
    it('fetch Restaurants', async () => {
      onFetch(restaurants);

      const rate = await fetchRestaurants('서울', 1);

      expect(rate).toEqual(restaurants);
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
