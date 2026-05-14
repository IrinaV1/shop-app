import axios from 'axios';
import { API_ENDPOINTS, BASE_URL, PER_PAGE } from './constants';
axios.defaults.baseURL = BASE_URL;
//5
export async function fetchCategories() {
  const { data } = await axios.get(API_ENDPOINTS.CATEGORIES);
  return data;
}
//1
export async function fetchProducts(product) {
  const { data } = await axios(`${BASE_URL}`);
  return data;
}
//2
export async function fetchAllProducts(currentPage) {
  const skip = (currentPage - 1) * 12;
  const { data } = await axios.get(
    `${API_ENDPOINTS.PRODUCTS}?limit=${PER_PAGE}&skip=${skip}`
  );
  return data;
}

//6
export async function fetchCategory(category, currentPage) {
  const skip = (currentPage - 1) * 12;
  const { data } = await axios.get(
    `${API_ENDPOINTS.CATEGORY}${category}?limit=${PER_PAGE}&skip=${skip}`
  );
  return data;
}
//3
export async function fetchProductId(id) {
  const { data } = await axios(`${BASE_URL}/${id}`);
  return data;
}
//4
export async function fetchProductName(query, page = 1) {
  const { data } = await axios(`${BASE_URL}/search`, {
    params: {
      q: query,
      limit: 12,
      skip: (page - 1) * 12,
    },
  });
  return data;
}
