const clockContainer = document.querySelector('.js-clock'),
    clockCTitle = document.querySelector('h1')

const value = localStorage.getItem('name')
const form = document.querySelector('.form')
const input = document.querySelector('.inputForm')
const h4 = document.querySelector('.js-greeting')
    function getTime() {
        const date = new Date();
        const miniutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        clockCTitle.innerHTML = `${hours}:${miniutes}:${seconds}`;

    }
    addEventListener('load',getTime)
    setInterval(getTime,10000);


    input.addEventListener('keypress',event=>{
        if(event.key === 'Enter'){
            const naming = input.value
            localStorage.setItem('name', naming)
            setName(naming);
            input.value = '';
        }else {
            
        }
    })

    function setName(potato){
        h4.innerHTML = `Hello it's great day Mrs/Ms ${potato}`
    }