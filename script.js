const table = document.querySelector('.table');
const tableBody = document.querySelector('tbody');

let myLibrary = [];

function Book (title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
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

        const bookReadCell = document.createElement('td');
        if (book.status) {
            bookReadCell.textContent = 'Read';
        } else {
            bookReadCell.textContent = 'Not Read';
        }
        bookReadCell.classList.add('read-cell');
        row.appendChild(bookReadCell);

        //create cell for delete book button
        const statusButtonCell = document.createElement('td');
        statusButtonCell.classList.add('button-cell')
        row.appendChild(statusButtonCell);

        //create delete book button
        const statusButton = document.createElement('button');
        statusButton.textContent = "Remove Book";
        statusButton.classList.add('status-button');
        statusButton.setAttribute('data-index', myLibrary.indexOf(book));
        statusButtonCell.appendChild(statusButton);
    });

    document.querySelector('#input').reset();

    //code for remove book button
    const removeBookButtons = document.querySelectorAll('.status-button');
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
    console.log(myLibrary);
};

// function assignDataKeysToButtons () {
//     //attach data-keys to every book displayed in table
//     for (i = 0; i <= myLibrary.length - 1; i++) {
        
//     };

// }

// const removeBookButtons = document.querySelectorAll('.status-button');

// removeBookButtons.forEach(button => {
//     button.addEventListener('click', removeBookFromLibrary (e.target.dataset.index));
//     console.dir(e.target.dataset.index);
// });

// function removeBookFromLibrary (bookIndex) {
//     for (i = 0; i <= myLibrary.length; i++) {
//         if (myLibrary[i] === bookIndex) {
//             myLibrary.splice(i, 1);
//         }
//     }
//     displayBooks ();
// };






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