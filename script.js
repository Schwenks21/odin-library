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
    const newRead = document.querySelector('#readBook').value;
    
    const newBook = new Book(newTitle, newAuthor, newPages, newRead);
    myLibrary.push(newBook);
    //TEST
    console.dir(newBook);
    
    createEntry(newTitle, newAuthor, newPages, newRead);
}

function createEntry (title, author, pages, status) {
    //make new table row
    const table = document.querySelector('.table');
    const row = document.createElement('tr');
    row.classList.add('row');
    table.appendChild(row);
    //make row contents
    const bookName = document.createElement('td');
    bookName.textContent = title;
    bookName.classList.add('title');
    row.appendChild(bookName);

    const authorName = document.createElement('td');
    authorName.textContent = author;
    authorName.classList.add('author');
    row.appendChild(authorName);

    const bookPages = document.createElement('td');
    bookPages.textContent = pages;
    bookPages.classList.add('pages');
    row.appendChild(bookPages);

    const bookRead = document.createElement('td');
    bookRead.textContent = status;
    bookPages.classList.add('read');
    row.appendChild(bookRead);
};

function closeForm () {
    bookForm.style.display = 'none';
}