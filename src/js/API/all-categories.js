import { getBooks } from './api-books';
import { homeCategory } from './selected';
import refs from './refs';

document.addEventListener('DOMContentLoaded', () => {
  async function renderCategoriesList() {
    const data = await getBooks('category-list');

    let markup = `<li data-category="top-books" class="category-books-item" tabindex="0">All categories</li>`;

    data.forEach(category => {
      markup += `<li class="category-books-item" data-category="${category.list_name}" tabindex="0">${category.list_name}</li>`;
    });

    refs.allListCategories.insertAdjacentHTML('beforeend', markup);

    const categoryLinks = document.querySelectorAll('.category-books-item');

    categoryLinks.forEach(link => {
      link.addEventListener('click', handleCategoryClick);
      link.addEventListener('keypress', handleKeyPress)
    });

    function handleCategoryClick(event) {
      event.preventDefault();
      const bestCategory = document.querySelector('.js-home-pg');
      const categories = document.querySelector('.js-selected-page');
      const category = event.target.innerHTML;
      for (const item of data) {
        if (item.list_name === category) {
          //   bestCategory.style.display = 'none';
          //   categories.style.display = 'block';
          homeCategory(category);
        }
      }
      if (category === 'All categories') {
        bestCategory.style.display = 'block';
        categories.style.display = 'none';
      }
    }
  
  function handleKeyPress(event) {
    if (event.key === 'Enter') { 
      handleCategoryClick(event); 
    }
  }
}

  renderCategoriesList();
});
