let myLibrary = [];

function Book(author,title,pages,readState){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.readState=readState;
}


const inputAuthor = document.querySelector("#author");
const inputTitle = document.querySelector("#title");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");

function addBookToLibrary(){
    let author = inputAuthor.value;
    let title = inputTitle.value;
    let pages = inputPages.value;
    let readState = false;
    if(inputRead.checked){
        readState = true;
    }


    myLibrary.push(new Book(author, title, pages, readState));
    formElements.forEach(input=>{input.value=''}); //resets form after submission (except radio)
    displayBooks();

}


const bookTable = document.querySelector(".library");

function displayBooks(){

    //clears table to avoid duplicates
    while(bookTable.childNodes.length > 2){
        console.log(bookTable.childNodes.length);
        bookTable.removeChild(bookTable.lastChild);
    }

    myLibrary.forEach(book=>{
        let row = document.createElement("tr");
        let tdAuthor = document.createElement("td");
        let tdTitle = document.createElement("td");
        let tdPages = document.createElement("td");
        let tdReadStatus = document.createElement("td"); //will want to change

        row.appendChild(tdAuthor);
        row.appendChild(tdTitle);
        row.appendChild(tdPages);
        row.appendChild(tdReadStatus);

        tdAuthor.innerText = book.author;
        tdTitle.innerText = book.title;
        tdPages.innerText = book.pages;
        tdReadStatus.innerText = "Not Read";

        if(book.readState){
            tdReadStatus.innerText = "Read";
        }



        bookTable.appendChild(row);
    })
}
//////////// Form input stuff ////////
const submit = document.querySelector("#form-submit");
const formElements = document.querySelectorAll("input");

// function resetForm() {
//     formElements.forEach(input=>{input.value=''});
// }

submit.addEventListener('click',addBookToLibrary);