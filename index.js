let range = document.querySelector('#range')
let size = document.querySelector('.size')
let container = document.querySelector('.container')
let button = document.querySelector('button')
let value = document.querySelector('.value')
let resolution = document.querySelector('.resolution')
let state = document.querySelector('.state')
let sizemessage = document.querySelector('.sizemessage')
let overlay = document.querySelector('.overlay')
let buttontext = document.querySelector('.buttontext')
let buttonicon = document.querySelector('#buttonicon')
let socialicons = document.querySelector('.socialicons')



range.addEventListener('input',(e)=>{
size.textContent=e.target.value
})
function exporting(){
    let progressvalue = 0
    let endvalue = 100
    let speed = 50
    let overlayvalue=1
    let interval = setInterval(() => {
        progressvalue++
        value.textContent=`${progressvalue}%`
        container.style.background=`conic-gradient(from -36deg,#fff ${progressvalue}%,#555 ${progressvalue}%)`
        resolution.style.display='none'
        state.style.display='block'
        sizemessage.style.textAlign='center'
        sizemessage.textContent="Please dont lock your screen"
        overlay.style.display='grid'
        overlay.style.background=`rgb(0,0,0,${overlayvalue-=0.01})`
        buttontext.textContent='Exporting...'
        button.classList.add('exporting')
        if(progressvalue===endvalue){
            clearInterval(interval)
            sizemessage.textContent='file is succesfully exported to your device'
            buttontext.textContent='Share To Facebook'
            button.classList.replace('exporting','endexport')
            buttonicon.classList.replace('fa-solid','fa-brands')
            buttonicon.classList.replace('fa-upload','fa-facebook-f')
            state.textContent='Ready To Share'
            socialicons.style.display='flex'
        }
    
    }, speed);
}
button.addEventListener('click',exporting)