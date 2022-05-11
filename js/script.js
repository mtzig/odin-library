let myLibrary = [];

function Book(author,title,pages,readState){
    this.author=author;
    this.title=title;
    this.pages=pages;
    this.readState=readState;
}

Book.prototype.setReadState = function(readState) {
    this.readState = readState;
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
        bookTable.removeChild(bookTable.lastChild);
    }

    myLibrary.forEach((book, index)=>{

        let row = document.createElement("tr");
        let tdAuthor = document.createElement("td");
        let tdTitle = document.createElement("td");
        let tdPages = document.createElement("td");
        let tdReadStatus = document.createElement("td"); //will want to change
        let remove = document.createElement("td")
        

        row.appendChild(tdAuthor);
        row.appendChild(tdTitle);
        row.appendChild(tdPages);
        row.appendChild(tdReadStatus);
        row.appendChild(remove);


        let removeButton = document.createElement("button");
        removeButton.setAttribute("data-index",index);
        removeButton.classList.add("remove");
        removeButton.innerText = "Remove";
        remove.appendChild(removeButton);

        let readSelect = document.createElement("select");
        readSelect.setAttribute("name","read-stat");
        readSelect.setAttribute("data-index",index);

        let read =  document.createElement("option");
        read.setAttribute("value","read");
        read.innerText = "Read";

        let not_read =  document.createElement("option");
        not_read.setAttribute("value","unread");
        not_read.innerText = "Not Read";

        readSelect.appendChild(read);
        readSelect.appendChild(not_read);

        tdAuthor.innerText = book.author;
        tdTitle.innerText = book.title;
        tdPages.innerText = book.pages;
        tdReadStatus.appendChild(readSelect);

        if(book.readState){
            // tdReadStatus.innerText = "Read";
            readSelect.value = "read";
        }else {
            readSelect.value = "unread";
        }



        bookTable.appendChild(row);
    });

    let removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach(button => {
        button.addEventListener('click',()=>{
            let index = button.dataset.index;
            myLibrary.splice(index,1);
            displayBooks();
        });
    });

    let readStatus = document.querySelectorAll('[name="read-stat"]');
    readStatus.forEach(selector => {
        selector.onchange =
        ()=>{
            let index = selector.dataset.index;
            let readStatus = selector.value;
            myLibrary[index].setReadState(false);
            if(readStatus === "read"){
                myLibrary[index].setReadState(true);
            }
            console.log(myLibrary[index].readState);
        };
    });
}


//////////// Form input stuff ////////
const submit = document.querySelector("#form-submit");
const formElements = document.querySelectorAll("input");

// function resetForm() {
//     formElements.forEach(input=>{input.value=''});
// }

submit.addEventListener('click',addBookToLibrary);