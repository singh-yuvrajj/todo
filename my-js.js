
const form = document.querySelector(".todo-form");
const todo = document.querySelector(".todo-form input");
const ul= document.querySelector(".added-todo");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const li = document.createElement("li");
    li.innerHTML= `<span class="work"></span>
    <div class="todo-buttons">
    <button class="done">✔</button>
    <button class="remove">✖</button>
    </div>`;
    li.querySelector(".work").textContent=todo.value;
    todo.value="";
    ul.append(li); 
})

ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        e.target.parentNode.parentNode.remove();
    }
    else if(e.target.classList.contains("done"))
   {
    e.target.parentNode.previousElementSibling.style.textDecoration="line-through";
   }

})