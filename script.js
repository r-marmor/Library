// Empty array for library
let myLibrary = [];
console.log(myLibrary);

// Object constructor

class Book {
    constructor(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}

}


// Function to populate myLibrary array
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    
    myLibrary.push(book);
    
    displayBooksOnPage();
    
}


// Function to display library array to cards
function displayBooksOnPage() {
    const books = document.querySelector('.books');
    const removeDivs = document.querySelectorAll(".card");
    for (let i= 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    // Loop over the library array and display to the cards
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');
        books.appendChild(card);
        for (let key in book) {
            const para = document.createElement('p');
            para.textContent = `${key}: ${book[key]}`;
            card.appendChild(para);
        }
    });
}


const addBtn = document.getElementById('add_btn');
const formulaire = document.getElementById("formulaire");

addBtn.addEventListener('click', displayForm);

function displayForm() {
   formulaire.style.display = "flex";
}


const submitBtn = document.querySelector('.submit_btn');
submitBtn.addEventListener('click', intakeFormData);

// Transform form data to variables for intake
function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;

    // Return if form is incomplete 
    if ((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
        return;
    }

    // Call the function to input the book data to array
    
    addBookToLibrary(Title, Author, Pages, Read);
    // Reset the form after sucessful submission
    document.getElementById("add-book").reset();
}

const resetBtn = document.querySelector(".reset_btn");
resetBtn.addEventListener('click', resetForm);

function resetForm() {
    document.getElementById("add-book").reset();
}

