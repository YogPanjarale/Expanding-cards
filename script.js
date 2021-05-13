panels = document.querySelectorAll('.panel');
con = document.getElementsByClassName('container');
console.log(panels)

panels.forEach((element)=>{
    element.addEventListener('click',()=>{
        removeactive();
        element.classList.add('active');
    })
})


    function removeactive(){
        panels.forEach((element)=>{
            element.classList.remove('active');
        })
    }