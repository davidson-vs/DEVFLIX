function scrollMenu(){
    let menu = document.querySelector("header")
    menu.classList.toggle("scroll", window.scrollY > 210)
}

window.addEventListener("scroll",()=>{
    setInterval(scrollMenu(),3000)
})

