const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.toggleRead = function(){
    this.read = !this.read
  }
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

addBookBtn.addEventListener("click" , openForm);

// Close form after clicking outside the form
window.addEventListener('mouseup' , (e) => !formPopup.contains(e.target) && closeForm());

function displayBook(book, index) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
 
  const title = document.createElement("p");
  title.textContent = `"${book.title}"`
  
  const author = document.createElement("p");
  author.textContent = book['author'];
  
  const pages = document.createElement("p");
  pages.textContent = `${book.pages} pages`;
  
  const readBtn = document.createElement("button");
  readBtn.textContent = book.read ? 'Read ✔' : 'Not read';
  readBtn.classList.add("btn");

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("button-group");
  
  const removeBtn = document.createElement("button");
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add("btn");
  removeBtn.classList.add("remove")
  removeBtn.setAttribute("data-position", index)
  
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(btnGroup);
  
  btnGroup.appendChild(readBtn);
  btnGroup.appendChild(removeBtn); 
  
  booksContainer.appendChild(bookCard);

  removeBtn.addEventListener('click' , (e) => {
    const pos = Number(e.target.dataset.position);
    removeBook(pos);
  })

  readBtn.addEventListener('click' , function(){
    book.toggleRead()
    readBtn.textContent = book.read ? 'Read ✔' : 'Not read';
  })
}

userInputBook.addEventListener("submit", (e) =>{
  e.preventDefault();
  const book = getBookFromInput()
  addBookToLibrary(book)
  displayLibrary()
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

// Render the entire library of books
function displayLibrary(){
  booksContainer.innerHTML = '';
  myLibrary.forEach(function (book,index){ 
     // Render each book by calling the displayBook function
    displayBook(book,index)
  });
};

function removeBook (index) {
  myLibrary.splice(index, 1)
  displayLibrary()
}

displayLibrary()


