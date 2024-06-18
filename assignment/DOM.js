Assignment

Q1. 
function addBook() {
    const bookTitle = prompt("Enter the book title:");
    if (bookTitle) {
        const ul = document.getElementById("book-list");
        const li = document.createElement("li");
        li.textContent = bookTitle;
        ul.appendChild(li);
    }
}


Q2. 
function searchBook() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const ul = document.getElementById("book-list");
    const books = ul.getElementsByTagName("li");

    for (let book of books) {
        if (book.textContent.toLowerCase().includes(searchTerm)) {
            book.style.backgroundColor = "yellow";
        } else {
            book.style.backgroundColor = "";
        }
    }
}


Q3.
function removeBook() {
    const ul = document.getElementById("book-list");
    const lastBook = ul.lastElementChild;
    if (lastBook) {
        const confirmation = confirm("Are you sure you want to remove the last book?");
        if (confirmation) {
            ul.removeChild(lastBook);
        }
    }
}


Q4.
document.getElementById("book-list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("favorite");
    }
});

Q5.
function clearSearchHighlights() {
    const ul = document.getElementById("book-list");
    const books = ul.getElementsByTagName("li");

    for (let book of books) {
        book.style.backgroundColor = "";
    }
}
