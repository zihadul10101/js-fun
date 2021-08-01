let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');


addToDoButton.addEventListener('click', function () {

    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    let inputField = document.getElementById('inputField').value;
    paragraph.innerText = inputField;
    toDoContainer.appendChild(paragraph);

    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    })

})