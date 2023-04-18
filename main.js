const head = document.querySelector('h1')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

function toast(message) {
    Toastify({

        text: message,
        
        duration: 3000
        
        }).showToast();
}



let count = 0

head.innerHTML = count

function add() {
   count++
   head.innerHTML = count 
}

plus.addEventListener('click', ()=>{
    add()
})


function sub() {
    if (count < 1) {
        toast('unallowed');
        return;
    }
    count--
    head.innerHTML = count 

 }
 
 minus.addEventListener('click', ()=>{
     sub()
 })