const texto = document.getElementById('texto')
const no = document.getElementById('no')
const background = document.getElementById('background')

var contador = 0

no.addEventListener('mousemove', function(){

    contador++ 

    let x = Math.floor(Math.random() * 100)
    let y = Math.floor(Math.random() * 100)

    no.style.bottom = y + '%'
    no.style.right = x + '%'

    if(contador == 20){
        texto.innerHTML = 'Y R U RUNNING???'
    }
    if(contador == 40){
        texto.innerHTML = 'you WILL love me!!!'
        background.style.backgroundImage = "url(https://t4.ftcdn.net/jpg/02/06/17/47/360_F_206174739_YpDkWVIMJbfxROmkciOVbWAyYDnTxb0M.jpg)"
    }
})


function casar(){
    no.innerHTML = 'CLARO!'

    setTimeout(function(){
        while(!confirm('Do you really??')){}
        alert('💖 I pronounce you partners')
        window.close()
    }, 500)
}