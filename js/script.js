function scrollMenu() {
   let menu = document.querySelector("header")
   menu.classList.toggle("scroll", window.scrollY > 210)
}

window.addEventListener("scroll", () => {
   setInterval(scrollMenu(), 3000)
})

const itens = document.querySelectorAll(".item")
const item = document.querySelectorAll(".item")

console.log(item)
for (tag of itens) {
   tag.addEventListener("mouseenter", (e) => {
      e.target.classList.toggle("show")
   })
   tag.addEventListener("mouseleave", (e) => {
      e.target.classList.toggle("show")
   })
}
