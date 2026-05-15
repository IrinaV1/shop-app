import axios from 'axios';
import { API_ENDPOINTS, PER_PAGE, BASE_URL } from './constants';
axios.defaults.baseURL = BASE_URL;
//5
export async function fetchCategories() {
  const { data } = await axios.get(API_ENDPOINTS.CATEGORIES);
  return data;
}
//1
// export async function fetchProducts(product) {
//   const { data } = await axios(`${BASE_URL}`);
//   return data;
// }
//2
export async function fetchAllProducts(currentPage = 1) {
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
export async function fetchProductById(id) {
  const { data } = await axios.get(`${API_ENDPOINTS.PRODUCT_BY_ID}${id}`);
  return data;
}
//4
export async function fetchProductName(query, currentPage = 1) {
  const skip = (currentPage - 1) * 12;
  const { data } = await axios.get(API_ENDPOINTS.SEARCH_PRODUCT, {
    params: { q: query, limit: PER_PAGE, skip },
  });

  return data;
}
