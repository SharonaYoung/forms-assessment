const todoInput = document.querySelector('#todo');
const ul = document.querySelector('ul');
const clear = document.querySelector('#clear');

// array to hold to-do items
let items = [];

// add event listener for submit button
document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();

  // get info from text input and add to array
  items.push(todoInput.value);

  // clear input box after submit is clicked
  todoInput.value = " ";

  // map over array to create li for entered item
  let todoList = items.map(item => `
    <li>${item}</li>
  `)

  // add list to the DOM
  ul.innerHTML = todoList.join(" ");
});

// erase list when clear button is clicked
clear.addEventListener('click', function(){
 ul.innerText = " ";
 items = [];
});
