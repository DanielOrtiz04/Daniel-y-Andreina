let estilo1 = document.getElementById('estilo1');
let estilo2 = document.getElementById('estilo2');
let fondo = document.getElementById('fondo')
let estilo3=document.getElementById('estilo3')
let botones=document.getElementsByClassName('Estilos')


estilo1.addEventListener('click', function(event){
    fondo.style.backgroundColor = 'green';
    fondo.style.fontFamily = 'Georgia ';

})


estilo2.addEventListener('click', function(event){
    fondo.style.backgroundColor = 'blue';
    fondo.style.fontFamily = 'Courier';
})

estilo3.addEventListener('click', function(event ){
    fondo.style.backgroundColor='yellow';
    fondo.style.fontFamily = 'Cursive';

})