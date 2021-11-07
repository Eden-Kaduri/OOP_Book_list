//Constructors for Book & UI
class Book {
    constructor(name, author, date) {
        this.name = name;
        this.Author = author;
        this.date = new Date(date);
    }

}


class UI {
    addBookToList = function (book) {
        const tbody = document.getElementById('tbody');
        const row = document.createElement('tr');
        row.id = 'trow';
        row.innerHTML =
            `<td scope="col">${book.name}</td>
        <td scope="col">${book.Author}</td>
        <td scope="col">${book.date}</td>
        <td scope="col"><a class="delete text-danger" href="#"> X</a></td>`;
        const cont = document.querySelector('.row');
        const form = document.querySelector('#bookForm');
        const alert = document.createElement('div');
        alert.className = "alert alert-success mb-0 mt-2";
        alert.innerHTML = `A book was Added successfully!`;
        cont.insertBefore(alert, form);
        // Set timeout
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
        tbody.appendChild(row);


    }

    clearFields = function () {
        const name = document.getElementById('bookNameInput').value = '';
        const Author = document.getElementById('bookAuthorInput').value = '';
        const PD = document.getElementById('bookPDInput').value = '';
    }

    deleteRow = function (target) {
        if (target.className === 'delete text-danger') {
            console.log(123);
            target.parentElement.parentElement.remove();
        }
    }


}


//Adding Event Listeners
document.getElementById('bookForm').addEventListener('submit', function (e) {
    const name = document.getElementById('bookNameInput').value;
    const Author = document.getElementById('bookAuthorInput').value;
    const PD = document.getElementById('bookPDInput').value;

    if (name === '' || Author === '' || PD === '') {
        alert('One of the fields or more are missing!');
    } else {
        var book = new Book(name, Author, PD);
        var ui = new UI();
        ui.addBookToList(book);
        ui.clearFields();

    }
    e.preventDefault();

})

document.getElementById('tbody').addEventListener('click', function (e2) {
    var ui2 = new UI();
    console.log(e2.target);
    ui2.deleteRow(e2.target);
    e2.preventDefault();
})