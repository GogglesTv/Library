const submit = document.querySelector("#submit");
let newTitle = document.querySelector("#new-title");
let newAuthor = document.querySelector("#new-author");
let newPages = document.querySelector("#new-pages");
let newRead = document.querySelector("#new-read");
let libraryEl = document.querySelector(".my-books");

let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  displayBooks() {
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
      <button class="btn w-100 fs-5 fw-bold" onclick="removeBook(${i})" style="background-color: #d1d5db">Remove</button>
    </div>`;
      libraryEl.appendChild(card);
    }
  }

  set addBookToLibrary(book) {
    myLibrary.push(book);
  }
}

function updateDisplay() {
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let library = myLibrary[i];
    let book = new Book(
      library.title,
      library.author,
      library.pages,
      library.read
    );
    book.displayBooks();
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  updateDisplay();
}

function toggleRead(index) {
  myLibrary[index]["read"] === "Read"
    ? (myLibrary[index]["read"] = "Not Read")
    : (myLibrary[index]["read"] = "Read");
  updateDisplay();
}

function resetForm() {
  newTitle.value = "";
  newAuthor.value = "";
  newPages.value = "";
  newRead.checked = false;
}

submit.addEventListener("click", () => {
  event.preventDefault();
  newRead.checked === true
    ? (newRead.value = "Read")
    : (newRead.value = "Not Read");
  let newBook = new Book(
    newTitle.value,
    newAuthor.value,
    newPages.value,
    newRead.value
  );
  newBook.addBookToLibrary = newBook;
  newBook.displayBooks();
  resetForm();
});
