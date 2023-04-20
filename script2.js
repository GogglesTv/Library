"use strict";

const submit = document.querySelector("#submit");
let newTitle = document.querySelector("#new-title");
let newAuthor = document.querySelector("#new-author");
let newPages = document.querySelector("#new-pages");
let newRead = document.querySelector("#new-read");

let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let libraryEl = document.querySelector(".my-books");
  libraryEl.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let card = document.createElement("div");
    card.classList.add("card", "book");
    card.innerHTML = `<div class="card-body text-center">
      <h5 class="card-title fw-bold mb-4" id="book-title">${book.title}</h5>
      <h5 class="card-title fw-bold mb-4" id="book-author">${book.author}</h5>
      <h5 class="card-title fw-bold" id="book-pages">${book.pages} Pages</h5>
      <button class="btn w-100 my-3 fs-5 fw-bold" onclick="toggleRead(${i})" style="background-color: ${
      book.read === "Read" ? "#81fea4" : "#f87171"
    }">
      ${book.read}</button>
      <button class="btn w-100 fs-5 fw-bold" onclick="removeBook(${i})">Remove</button>
    </div>`;
    libraryEl.appendChild(card);
  }
}

function addBookToLibrary() {
  // do stuff here
  newRead.checked === true
    ? (newRead.value = "Read")
    : (newRead.value = "Not Read");

  let newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newPages.value,
    newRead.value
  );
  console.log(newBook);
  myLibrary.push(newBook);
  render();
}

submit.addEventListener("click", () => {
  event.preventDefault();
  addBookToLibrary();
});
