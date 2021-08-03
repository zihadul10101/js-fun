let kgBtn =document.getElementById('kg');
let poundBtn =document.getElementById('pound');


kgBtn.addEventListener('click',function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input/2.205 + 'kg';
})


poundBtn.addEventListener('click',function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input*2.205 + 'pound';
})