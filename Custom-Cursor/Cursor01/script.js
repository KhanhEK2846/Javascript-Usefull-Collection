const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
    cursor.style.top = e.pageY -10 + 'px';
    cursor.style.left = e.pageX -10 + 'px';
});

document.addEventListener("click",()=>{
    cursor.classList.add("act");

    setTimeout(()=>{
        cursor.classList.remove("act");
    },400)
})
