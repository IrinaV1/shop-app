import axios from 'axios';
import { BASE_URL, currentPage } from './constants';

//5
export async function fetchCategories(categories) {
  const { data } = await axios(`${BASE_URL}/category-list`);
  return data;
}
//4
export async function fetchProducts(product) {
  const { data } = await axios(`${BASE_URL}`);
  return data;
}
//2
export async function fetchAllProducts(products) {
  const { data } = await axios(
    `${BASE_URL}?limit=12&skip=${(currentPage - 1) * 12} `
  );
  return data;
}

//6
// export async function fetchCategory(value) {
//   const { data } = await axios(`${BASE_URL}/category/${value}`);
//   return data;
// }
