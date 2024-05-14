const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// User interface
const form = document.getElementById("form-popup");
const overlay = document.getElementById("overlay");
const addBookBtn = document.getElementById("addBookBtn");

function openForm() {
  overlay.style.display = "block";
  form.style.display = "block";
}

function closeForm() {
  overlay.style.display = "none";
  form.style.display = "none";
}

// Open form after clicking the add book button
addBookBtn.addEventListener("click" , openForm);

// Close form after clicking outside the form
window.addEventListener('mouseup' , function(e){
  if(!form.contains(e.target) && e.target !== addBookBtn){
      closeForm();
  }
})





