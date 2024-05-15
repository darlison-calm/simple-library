const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// User interface
const formPopup = document.getElementById("form-popup");
const overlay = document.getElementById("overlay");
const addBookBtn = document.getElementById("addBookBtn");
const booksContainer = document.getElementById("booksGrid");
const userInputBook = document.querySelector(".add-book-form");

function openForm(){
  overlay.style.display = "block";
  formPopup.style.display = "block";
}
function closeForm(){
  overlay.style.display = "none";
  formPopup.style.display = "none";
}

// Open form after clicking the add book button
addBookBtn.addEventListener("click" , openForm);

// Close form after clicking outside the form
window.addEventListener('mouseup' , (e) => !formPopup.contains(e.target) && closeForm());

// Display book on the page
function displayBook(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readBtn = document.createElement("button");
  const btnGroup = document.createElement("div");
  const removeBtn = document.createElement("button");

  title.textContent = `"${book.title}"`
  author.textContent = book['author'];
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = 'Remove';

  readBtn.textContent = book.read ? 'Read ✔' : 'Not read';

  bookCard.classList.add("book-card");
  btnGroup.classList.add("button-group");
  removeBtn.classList.add("btn");
  readBtn.classList.add("btn");

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(btnGroup);
  
  btnGroup.appendChild(readBtn);
  btnGroup.appendChild(removeBtn); 
  
  booksContainer.appendChild(bookCard);
}


userInputBook.addEventListener("submit", (e) =>{
  e.preventDefault();
  const book = getBookFromInput()
  addBookToLibrary(book)
  displayBook(book)
  userInputBook.reset();
  closeForm()
})

function getBookFromInput() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read-status').checked;
 
  return new Book(title, author, pages, read)
}

function displayLibrary(){
  booksContainer.innerHTML = '';
  myLibrary.forEach((book) => displayBook(book));
};

displayLibrary()


