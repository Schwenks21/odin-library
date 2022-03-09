let myLibrary = [];

function Book (title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const bookForm = document.querySelector('#book-form')
const addBookBtn = document.querySelector('#add-book-btn');
addBookBtn.addEventListener('click', displayForm);

function displayForm () {
    bookForm.style.display = 'flex';
}

const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', addBooktoLibrary);
submitButton.addEventListener('click', closeForm);

function addBooktoLibrary () {
    const newTitle = document.querySelector('#bookTitle').value;
    const newAuthor = document.querySelector('#bookAuthor').value;
    const newPages = document.querySelector('#bookPages').value;
    const newStatus = document.querySelector('#readStatus').checked;
    
    const newBook = new Book(newTitle, newAuthor, newPages, newStatus);
    myLibrary.push(newBook);
    //TEST
    console.dir(myLibrary);
    
    createEntry (newBook);
}

// function displayBooks() {
//     myLibrary.forEach(book => {
//         //make new table row
//         const table = document.querySelector('.table');
//         const row = document.createElement('tr');
//         row.classList.add('row');
//         table.appendChild(row);

//         //make row contents
//         const bookName = document.createElement('td');
//         bookName.textContent = book.title;
//         bookName.classList.add('title');
//         row.appendChild(bookName);

//         const authorName = document.createElement('td');
//         authorName.textContent = book.author;
//         authorName.classList.add('author');
//         row.appendChild(authorName);

//         const bookPages = document.createElement('td');
//         bookPages.textContent = book.pages;
//         bookPages.classList.add('pages');
//         row.appendChild(bookPages);

//         // const bookRead = document.createElement('td');
//         // bookRead.textContent = book.status;
//         // bookPages.classList.add('read');
//         // row.appendChild(bookRead);
//     });
// };

function createEntry (book) {
    //make new table row
    const table = document.querySelector('.table');
    const row = document.createElement('tr');
    row.classList.add('row');
    table.appendChild(row);

    //make row contents
    const bookName = document.createElement('td');
    bookName.textContent = book.title;
    bookName.classList.add('title');
    row.appendChild(bookName);

    const authorName = document.createElement('td');
    authorName.textContent = book.author;
    authorName.classList.add('author');
    row.appendChild(authorName);

    const bookPages = document.createElement('td');
    bookPages.textContent = book.pages;
    bookPages.classList.add('pages');
    row.appendChild(bookPages);

    const bookRead = document.createElement('td');
    if (book.status) {
        bookRead.textContent = 'Read';
    } else {
        bookRead.textContent = 'Not Read';
    }
    bookRead.classList.add('read');
    row.appendChild(bookRead);

    bookForm.reset();
};

function closeForm () {
    bookForm.style.display = 'none';
}