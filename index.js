const result = document.querySelector(".input-row__input")
console.log(result.value)


const newDiv = document.createElement('div-task');


newDiv.textContent = 'gggg';


newDiv.classList.add('task'); 
newDiv.setAttribute('tak-id', 'task-unique-id'); 
newDiv.setAttribute('data-custom', 'значение'); 
const parentElement = document.getElementById('lists');




parentElement.appendChild(newDiv);
