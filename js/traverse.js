// NOTES YOU NEED TO PUT Array.from() if you want to use forEach Method
// Getting by the ID
// const grandparent = document.getElementById("grandparent-id")
const grandparent = document.querySelector(".grandparent")
const parents = Array.from(grandparent.children)
parents.forEach(changeColor);
// changeColor(grandparent);

// const parents = document.querySelectorAll(".parent")
// parents.forEach(changeColor)
// changeColor(parents)
// Getting by the className
// const parents = document.getElementsByClassName('parent')

// using forEach with className
// const parents = Array.from(document.getElementsByClassName('parent'))
// parents.forEach(changeColor)
// changeColor(grandparent)

function changeColor(element) {
    element.style.backgroundColor = "#333"
}