let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
    info() {
        this.read ? (this.read = "already read") : (this.read = "not read yet");
        return `"${this.title}" by ${this.author}, ${this.pages} pages, ${this.read}.`;
    } 
}

function addBookToLibrary() {

    

}