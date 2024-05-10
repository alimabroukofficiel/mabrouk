const q = document.querySelectorAll('.q')
q.forEach(i =>{
    i.addEventListener('click' , ()=>{
        i.parentElement.classList.toggle('active')
    })
})