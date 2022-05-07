let myLibrary = [];

function Book(author,title,pages,readState){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.readState=readState;
}

function addBookToLibrary(){
    //adds books

}

//////////// Form input stuff ////////
const submit = document.querySelector("#form-submit");
const formElements = document.querySelectorAll("input");

function resetForm() {
    formElements.forEach(input=>{input.value=''});
}

submit.addEventListener('click',resetForm);