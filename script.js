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

//default data
myLibrary.push(new Book('The Stand', 'Stephen King', 1153, true));
myLibrary.push(new Book ('Project Hail Mary', 'Andy Weir', 496, false));
myLibrary.push(new Book ('11-22-63', 'Stephen King', 849, true));

const bookForm = document.querySelector('#book-form');
const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', displayForm);

function displayForm () {
    bookForm.style.display = 'flex';
}

const cancelButton = document.querySelector('#cancel');
cancelButton.addEventListener('click', closeForm);

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
        row.appendChild(bookNameCell);

        //make cells for each new row
        const authorNameCell = document.createElement('td');
        authorNameCell.textContent = book.author;
        row.appendChild(authorNameCell);

        const bookPagesCell = document.createElement('td');
        bookPagesCell.textContent = book.pages;
        row.appendChild(bookPagesCell);

        //buttons for read status of books in library
        const bookReadCell = document.createElement('td');
        const bookReadButton = document.createElement('button');
        if (book.status) {
            bookReadButton.textContent = 'Read';
            bookReadButton.classList.add('read');
        } else {
            bookReadButton.textContent = 'Not Read';
        }
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
        deleteButton.textContent = "Remove";
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('data-index', myLibrary.indexOf(book));
        deleteButtonCell.appendChild(deleteButton);
    });

    //code for book read status buttons
    const bookReadButtons = document.querySelectorAll('.read-status-button');
    bookReadButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const book = myLibrary[e.target.dataset.index];
            book.toggleReadStatus();
            if (book.status) {
                e.target.textContent = "Read";
                e.target.classList.add('read')
            } else {
                e.target.textContent = "Not Read";
                e.target.classList.remove('read');
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

function closeForm () {
    bookForm.style.display = 'none';
}

displayBooks ();