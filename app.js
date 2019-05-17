// let liste = document.getElementsByClassName("list-group")[0];
// let button = document.getElementsByClassName("btn btn-danger")[0];

// console.log(liste);

// button.addEventListener('click', addListItem);
// let list_length = document.getElementsByClassName("list-group")[0].children.length;

// function addListItem(e) {
//     e.preventDefault()
//     list_length++
//     let newLisItem = document.createElement('li')
//     newLisItem.className = 'list-group-item d-flex justify-content-between'
//     newLisItem.textContent = 'Todo' + list_length
//     let anchor = document.createElement('a')
//     anchor.innerHTML = '<i class="fa fa-remove"></i>'
//     newLisItem.children = anchor

//     liste.appendChild(newLisItem)
// }

// console.log(liste);










// Add New Item


let find_ul = document.querySelector(".list-group"); // Find to ul for Add new item from down

let find_li = find_ul.children; //Find children of ul element

let length_li = find_li.length + 1; // children of ul numbers

let btn = document.querySelector(".btn"); // For find to button

btn.addEventListener('click', add_list);

function add_list(e) {

    e.preventDefault();

    let nw_nmr = length_li++;

    //class text a i 
    let newLisItem = document.createElement('li');
    newLisItem.className = ("list-group-item d-flex justify-content-between");
    newLisItem.textContent = "Todo" + nw_nmr;
    let anchor = document.createElement('a');
    anchor.innerHTML = ('<i class="fa fa-remove"></i>');

    newLisItem.children = anchor;

    find_ul.appendChild(newLisItem);


};