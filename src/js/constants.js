import { getLocalStorage, getLocalStorageWishlist } from './storage';

export const BASE_URL = 'https://dummyjson.com';
export const API_ENDPOINTS = {
  CATEGORIES: '/products/category-list',
  PRODUCTS: '/products',
  CATEGORY: '/products/category/',
  PRODUCT_BY_ID: '/products/',
  SEARCH_PRODUCT: '/products/search',
};
export const PER_PAGE = 12;
export let arrIdCart = [];
export let arrIdWishlist = [];
export const CART_KEY = 'cart';
export const WISHLIST_KEY = 'wishlist';
