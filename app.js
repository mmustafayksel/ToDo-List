let liste = document.getElementsByClassName("list-group")[0];
let button = document.getElementsByClassName("btn btn-danger")[0];

console.log(liste);

button.addEventListener('click', addListItem);
let list_length = document.getElementsByClassName("list-group")[0].children.length;

function addListItem(e) {
    e.preventDefault()
    list_length++

    let newLisItem = document.createElement('li')
    newLisItem.className = 'list-group-item d-flex justify-content-between'
    newLisItem.textContent = 'Todo' + list_length
    let anchor = document.createElement('a')
    anchor.innerHTML = '<i class="fa fa-remove"></i>'
    newLisItem.children = anchor

    liste.appendChild(newLisItem)
}

console.log(liste);