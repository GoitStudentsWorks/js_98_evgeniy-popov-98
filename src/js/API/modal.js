import { getBooks } from './api-books';

export function testModal() {
  function openModal(book) {
    const modalBackdrop = document.querySelector('.backdrop');

    modalBackdrop.style.display = 'flex';
    const modalWrap = document.querySelector('.modal-wrap');

    const bookImage = document.createElement('img');
    bookImage.src = book.book_image;
    bookImage.classList.add('modal-image');

    const title = document.createElement('h2');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = book.author;

    const description = document.createElement('p');
    description.textContent = book.description;

    modalWrap.innerHTML = '';

    modalWrap.appendChild(bookImage);
    modalWrap.appendChild(title);
    modalWrap.appendChild(author);
    modalWrap.appendChild(description);
  }
  //=====================================================
  const testOpenModal = document.querySelector('.open-modal');
  testOpenModal.addEventListener('click', () => {
    // openModal();
    testGetBook()
  });
  //========================================================
  // document.addEventListener('click', async function (event) {
  //   const target = event.target;
  //   if (true) {
  //     // const bookId = target.closest('.book-item').dataset.id;
  //     try {
  //       const book = await getBooks('642fd89ac8cf5ee957f12361');
  //       console.log(book)
  //       openModal(book);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }
  // });

 async function testGetBook() {
    const data = await getBooks('_id', '642fd89ac8cf5ee957f12361');
    console.log(data)
 }

  document.addEventListener('DOMContentLoaded', function () {
    const closeModalButton = document.querySelector('.close-btn');
    closeModalButton.addEventListener('click', function () {
      closeModal();
    });
  });

  function closeModal() {
    const modalBackdrop = document.querySelector('.backdrop');
    modalBackdrop.style.display = 'none';
  }
}
