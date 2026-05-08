import { fetchCategories } from './products-api';
import { refs } from './refs';
import { markupCategories } from './render-function';

// export async function handleSubmit(event) {
//   event.preventDefault();
//   let query = event.target.elements.searchValue.value.trim();
//   console.log(query);

//   if (!query) {
//     alert('Оберіть категорію');
//   }

//   try {
//     // const data = await fetchCategories(query);
//     // console.log(data);
//   } catch (error) {
//     alert(error.message);
//   } finally {
//     event.target.reset();
//   }
// }
