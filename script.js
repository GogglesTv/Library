"use strict";

const addBook = document.querySelector("#more-books");

const newTitle = document.querySelector("#new-title");
const newAuthor = document.querySelector("#new-author");
const newPages = document.querySelector("#new-pages");
const newRead = document.querySelector("#new-read");
const submit = document.querySelector("#submit");

const bookInfoInput = document.querySelector("#add-button");
const myBooks = document.querySelector(".my-books");
const card = myBooks.querySelector(".book");
let newCard = card.cloneNode(true);

let bookTitle = newCard.querySelector("#book-title");
let bookAuthor = newCard.querySelector("#book-author");
let bookPages = newCard.querySelector("#book-pages");
let bookRead = newCard.querySelector("#book-read");

let myLibrary = [];
let title;
let author;
let pages;
let read;
let newBook;

addBook.addEventListener("click", () => {
  console.log("Time to add a new book!");

  newTitle.value = "";
  newAuthor.value = "";
  newPages.value = "";
});

submit.addEventListener("click", (e) => {
  if (newRead.checked === true) {
    read = "yes";
  } else {
    bookRead.style.backgroundColor = "red";
  }

  newBook = new Book(newTitle.value, newAuthor.value, newPages.value, read);
  console.log(newBook);
  myLibrary.push(newBook);
  addBookToLibrary();
  e.preventDefault();
});

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return new Array(
      `Title: ${title}`,
      `Author: ${author}`,
      `Pages: ${pages}`,
      `Read? ${read}`
    );
  };
}

function addBookToLibrary() {
  // do stuff here
  newCard = card.cloneNode(true);
  bookTitle = newCard.querySelector("#book-title");
  bookAuthor = newCard.querySelector("#book-author");
  bookPages = newCard.querySelector("#book-pages");
  bookRead = newCard.querySelector("#book-read");
  myBooks.append(newCard);
  bookTitle.innerHTML = newTitle.value;
  bookAuthor.innerHTML = newAuthor.value;
  bookPages.innerHTML = newPages.value;
}

console.log(myLibrary);
