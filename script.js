panels = document.querySelectorAll('.panel');
con = document.getElementsByClassName('container');
btn = document.getElementById('btn');
console.log(panels)

panels.forEach((element)=>{
    element.addEventListener('click',()=>{
        removeactive();
        element.classList.add('active');
       
    })
})

btn.addEventListener('click',()=>{
    panels.forEach((ele)=>{
        ele.classList.remove('active');
        
    })
})
    function removeactive(){
        panels.forEach((element)=>{
            element.classList.remove('active');
        })
    }