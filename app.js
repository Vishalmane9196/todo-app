const todoInputEl = document.querySelector(".todo__input")
const todoListEl = document.querySelector(".todo__list")
const todoItemEl = document.querySelectorAll(".todo__item")

function addListItem(){
  todoInputEl.addEventListener('keypress' , function(event){
    //keycode of "enter" is 13
   if(event.keyCode === 13){ 
    let newListItem = createListItem(todoInputEl.value);
    todoListEl.insertBefore(newListItem,todoListEl.childNodes[0])
    todoInputEl.value = "";
   }  
  })
}

function toggleDone(){
  todoListEl.addEventListener("click", function(event){
    if(event.target.classList.contains("todo__item"))
    event.target.classList.toggle("done");
  })
}

toggleDone();

function createListItem(text){
const newListElement = document.createElement("li");
newListElement.textContent = text;
newListElement.setAttribute("class","todo__item")
return newListElement;
}

addListItem();