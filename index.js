
let seconds = 0;
let tens = 0;

let getSeconds = document.querySelector('.seconds')
let getTens = document.querySelector('.tens')

let btnStart = document.querySelector('.btn-start')
let btnStop = document.querySelector('.btn-end')
let btnReset = document.querySelector('.btn-reset')

btnStart.addEventListener('click' , () =>{
    interval = setInterval(stratTimer , 10)
})

btnStop.addEventListener('click', () =>{
    clearInterval(interval);
} )

btnReset.addEventListener('click', () =>{
    clearInterval(interval)
    tens = '00'
    seconds ='00'

    getSeconds.innerHTML ='00'
    getTens.innerHTML = '00'
})
function stratTimer(){
    tens++;
    if(tens <=9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens
    }
    if(tens >99){
        seconds++
        getSeconds.innerHTML ='0' + seconds;
        tens = 0
        getTens.innerHTML = '0' + tens
    }

    if(seconds > 9){
        getSeconds.innerHTML = seconds
    }
}