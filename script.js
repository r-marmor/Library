// Empty array for library
let myLibrary = [];

// displayBooksOnPage();

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
    let index = 0;
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');
        books.appendChild(card);

        for (let key in book) {
            const para = document.createElement('p');
            para.textContent = `${key}: ${book[key]}`;
            card.appendChild(para);
        }

        // Create remove book button 
        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-book-btn");
        removeBookButton.textContent = "Remove from library";
        removeBookButton.dataset.linkedArray = index;
        
        card.appendChild(removeBookButton);

        removeBookButton.addEventListener('click', removeBookFromLibrary);

        function removeBookFromLibrary() {
            let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
            myLibrary.splice(retrieveBookToRemove, 1);
            card.remove();
            displayBooksOnPage();
        }

        // Create a read status button
        const readStatusButton = document.createElement("button");
        readStatusButton.classList.add("read-status-btn");
        readStatusButton.textContent = "Toggle Read Status";

        // Link the read status button to a data attribute
        readStatusButton.dataset.linkedArray = index;
        card.appendChild(readStatusButton);

        readStatusButton.addEventListener('click', toggleReadSatus);

        function toggleReadSatus() {
            let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book();

            if ((myLibrary[parseInt(retrieveBookToToggle)].Read) == "Yes") {
                toggleBook.Read = "No";
                myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
            } else if ((myLibrary[parseInt(retrieveBookToToggle)].Read) == "No") {
                toggleBook.Read = "Yes";
                myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
            }
            displayBooksOnPage();
        }
    index++;
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