const clockContainer = document.querySelector('.js-clock'),
    clockCTitle = document.querySelector('h1')

const value = localStorage.getItem('name')
const form = document.querySelector('.form')
const inputing = document.querySelector('.inputForm')
const h4 = document.querySelector('.js-greeting')
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const todo = document.querySelector('.inputTodo')
const items = document.querySelector('.items')
const item = document.querySelector('.item')

function getTime() {
    const date = new Date();
    const miniutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockCTitle.innerHTML = `${hours}:${miniutes}:${seconds}`;
}

addEventListener('load',getTime)
setInterval(getTime,1000);

inputing.addEventListener('keyup', event=>{
    if (event.keyCode == 13){goNaming()}
})
btn.addEventListener('click',()=>{
    goNaming()
})

function setName(){
    const name = localStorage.getItem('name');
    h4.innerHTML = `Hello it's great day Mrs/Ms ${name}`;
    viewTodo();
    return
}

function goNaming() {
    const naming = inputing.value;
    if(naming.length>4){
        inputing.value = ''
        h4.innerHTML = 'Sorry my mother said to me that you have to use less then 5 letters name'
        return;
    } 
    else if (inputing.value !== '')
    {
        localStorage.setItem('name', naming)
        inputing.value = ''
        setName();}
}

function viewTodo() {
    container.style.visibility = 'visible';
}

todo.addEventListener('keyup',event=>{
    if (event.keyCode == 13){goTodo()}
})

let id = 0;
function goTodo() {
    const val = todo.value
    const li = document.createElement('Li')
    li.setAttribute('class','item')
    li.setAttribute('data-key',id)
    li.innerHTML= val;
    id++
    items.appendChild(li)
    todo.value=''
}

items.addEventListener('click', event=>{
    const id = event.target.dataset.key
    const userName = localStorage.getItem('name')
    const pickList = document.querySelector(`.item[data-key="${id}"]`)
    if(event.target.nodeName === 'LI'){
    alert(`TO: ${userName}... we are delete your list which you picked up`)
    items.removeChild(pickList)}
})