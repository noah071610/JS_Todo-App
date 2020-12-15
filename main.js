const clockContainer = document.querySelector('.js-clock'),
    clockCTitle = document.querySelector('h1')

const value = localStorage.getItem('name')
const form = document.querySelector('.form')
const inputing = document.querySelector('.inputForm')
const h4 = document.querySelector('.js-greeting')
const btn = document.querySelector('.btn')

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

    function setName(potato){
        h4.innerHTML = `Hello it's great day Mrs/Ms ${potato}`
        return
    }

    function goNaming() {
        if(inputing.value !== '')
            {const naming = inputing.value
            localStorage.setItem('name', naming)
            inputing.value = ''
            setName(naming);
        }}