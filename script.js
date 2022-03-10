const table = document.querySelector('.table');
const tableBody = document.querySelector('tbody');

let myLibrary = [];

function Book (title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

Book.prototype.toggleReadStatus = function () {
    if (this.status) {
        return this.status = false;
    } else {
        return this.status = true;
    }
}

const bookForm = document.querySelector('#book-form');
const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', displayForm);

function displayForm () {
    bookForm.style.display = 'flex';
}

const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', addBookToLibrary);
submitButton.addEventListener('click', closeForm);

function addBookToLibrary () {
    const newTitle = document.querySelector('#bookTitle').value;
    const newAuthor = document.querySelector('#bookAuthor').value;
    const newPages = document.querySelector('#bookPages').value;
    const newStatus = document.querySelector('#readStatus').checked;
    
    const newBook = new Book(newTitle, newAuthor, newPages, newStatus);
    myLibrary.push(newBook);
    
    displayBooks ();
}

function displayBooks() {
    //clear table
    tableBody.innerHTML = '';
    
    myLibrary.forEach(book => {
        //make new table row
        const row = document.createElement('tr');
        row.classList.add('row');
        tableBody.appendChild(row);

        //make row contents
        const bookNameCell = document.createElement('td');
        bookNameCell.textContent = book.title;
        bookNameCell.classList.add('title-cell');
        row.appendChild(bookNameCell);

        //make cells for each new row
        const authorNameCell = document.createElement('td');
        authorNameCell.textContent = book.author;
        authorNameCell.classList.add('author-cell');
        row.appendChild(authorNameCell);

        const bookPagesCell = document.createElement('td');
        bookPagesCell.textContent = book.pages;
        bookPagesCell.classList.add('pages-cell');
        row.appendChild(bookPagesCell);

        //buttons for read status of books in library
        const bookReadCell = document.createElement('td');
        const bookReadButton = document.createElement('button');
        if (book.status) {
            bookReadButton.textContent = 'Read';
        } else {
            bookReadButton.textContent = 'Not Read';
        }
        bookReadCell.classList.add('read-cell');
        bookReadButton.classList.add('read-status-button');
        row.appendChild(bookReadCell);
        bookReadCell.appendChild(bookReadButton);
        bookReadButton.setAttribute('data-index', myLibrary.indexOf(book));

        //create cell for delete book button
        const deleteButtonCell = document.createElement('td');
        deleteButtonCell.classList.add('button-cell')
        row.appendChild(deleteButtonCell);

        //create delete book button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Remove Book";
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('data-index', myLibrary.indexOf(book));
        deleteButtonCell.appendChild(deleteButton);
    });

    document.querySelector('#input').reset();

    //code for book read status buttons
    const bookReadButtons = document.querySelectorAll('.read-status-button');
    bookReadButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const book = myLibrary[e.target.dataset.index];
            book.toggleReadStatus();
            if (book.status) {
                e.target.textContent = "Read";
            } else {
                e.target.textContent = "Not Read";
            };
        });
    });

    //code for remove book button
    const removeBookButtons = document.querySelectorAll('.delete-button');
    removeBookButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            removeBookFromLibrary(e.target.dataset.index);
            displayBooks();
        });
    });
};


function removeBookFromLibrary (bookIndex) {
    tableBody.innerHTML = '';
    myLibrary.splice(bookIndex, 1);
};


//The following function adds one book to the myLibrary array at a time, however, I think I'll need to
//loop through the whole array to complete tasks 5 and 6
// function createEntry (book) {
//     //make new table row
//     const table = document.querySelector('.table');
//     const row = document.createElement('tr');
//     row.classList.add('row');
//     table.appendChild(row);

//     //make row contents
//     const bookName = document.createElement('td');
//     bookName.textContent = book.title;
//     bookName.classList.add('title');
//     row.appendChild(bookName);

//     const authorName = document.createElement('td');
//     authorName.textContent = book.author;
//     authorName.classList.add('author');
//     row.appendChild(authorName);

//     const bookPages = document.createElement('td');
//     bookPages.textContent = book.pages;
//     bookPages.classList.add('pages');
//     row.appendChild(bookPages);

//     const bookRead = document.createElement('td');
//     if (book.status) {
//         bookRead.textContent = 'Read';
//     } else {
//         bookRead.textContent = 'Not Read';
//     }
//     bookRead.classList.add('read');
//     row.appendChild(bookRead);

//     bookForm.reset();
// };

function closeForm () {
    bookForm.style.display = 'none';
}