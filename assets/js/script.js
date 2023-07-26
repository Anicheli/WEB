const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateTodey = new Date();
    let hr = dateTodey.getHours();
    let min = dateTodey.getMinutes();
    let s = dateTodey.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;
    
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})