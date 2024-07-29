
const botao = document.querySelector('.btn')


function trocarTema() {
    
    const corpo = document.querySelector('body')
    const classes = corpo.classList
    classes.toggle('dark-theme')
    if (classes == 'dark-theme')
    {
        botao.innerHTML = 'Claro'
    }else{botao.innerHTML = 'Escuro'}

    console.log(classes)
}

botao.addEventListener('click',trocarTema )
// const botao = document.querySelector('.btn')

// botao.addEventListener('click',function(){
//     document.body.classList.toggle('light-theme')
//     var className = document.body.className
//     if(className == 'light-theme')
//     {
//         this.textContent = 'dark'
//     } else {
//         this.textContent = 'light'
//     }
//     console.log(className)
// })