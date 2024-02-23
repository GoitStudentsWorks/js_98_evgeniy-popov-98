
import {getBooks} from './api-books'
import refs from './refs'

export async function render(){
    try {
        const data = await getBooks('top-books');
        for (const el of data) {
            categoriesTemplate(el);           
                renderBooks(el);
        }
    } catch (error) {
        console.error('Failed to render books:', error);
    }
}


function categoriesTemplate(categories){
    const markup = `<li id="${categories.list_name}" class="list-category-books">
    <h2 class="list-category-title">${categories.list_name}</h2>
    <ul class="list-book">
    
    </ul>    
    </li>`
    refs.galleryBooks.insertAdjacentHTML('beforeend', markup);
}


function bookTemplate(book) {
    const {book_image, author, title, _id, contributor, list_name} = book;
    if(list_name)
    return `
    <li class="card book-item" data-id="${_id}">
    <img class="book-img" src="${book_image}" alt="${contributor} ${title}">
    <h3 class="title-book">${title}</h3>
    <p class="author">${author}</p>
    </li>
    <button type="button" class="btn-more">See more</button>`;
}
function booksTemplate(books) {
    return  books.map(bookTemplate).join('');
}

export function renderBooks(el) {
    const categoriesID = el.list_name;
    const listBook = document.getElementById(categoriesID).querySelector('.list-book');
    const markup = booksTemplate(el.books);
    listBook.insertAdjacentHTML('afterbegin', markup);
}