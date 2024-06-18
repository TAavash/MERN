document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('bookList');
    const searchBar = document.getElementById('searchBar');
    const addBookButton = document.getElementById('addBookButton');
    let books = [];

    function renderBooks(filter = '') {
        bookList.innerHTML = '';
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter.toLowerCase()));
        filteredBooks.forEach((book, index) => {
            const bookItem = document.createElement('li');
            bookItem.innerHTML = `
                ${book.title}
                <div>
                    <button class="favoriteButton">${book.favorite ? 'Unfavorite' : 'Favorite'}</button>
                    <button class="removeButton">Remove</button>
                </div>
            `;
            bookList.appendChild(bookItem);

            const favoriteButton = bookItem.querySelector('.favoriteButton');
            const removeButton = bookItem.querySelector('.removeButton');

            favoriteButton.addEventListener('click', () => markFavorite(index));
            removeButton.addEventListener('click', () => removeBook(index));
        });
    }

    function addBook(title) {
        books.push({ title, favorite: false });
        renderBooks();
    }

    function removeBook(index) {
        books.splice(index, 1);
        renderBooks();
    }

    function markFavorite(index) {
        books[index].favorite = !books[index].favorite;
        renderBooks();
    }

    addBookButton.addEventListener('click', () => {
        const newBookTitle = prompt('Enter the title of the new book:');
        if (newBookTitle) {
            addBook(newBookTitle);
        }
    });

    searchBar.addEventListener('input', (e) => {
        renderBooks(e.target.value);
    });

    // Initial render
    renderBooks();
});
