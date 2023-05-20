const count = document.querySelector('.count');
const input = document.createElement('input');

input.addEventListener("keyup", () => {
    count.innerHTML=input.value.length
})