// NOTES YOU NEED TO PUT Array.from() if you want to use forEach Method
////////********************** Getting by class name *****************///////
// const parents = Array.from(document.getElementsByClassName("parent"))
// parents.forEach(parentsColor)
//
// function parentsColor(element){
//     element.style.backgroundColor = "#333"
// }
////////********************** Getting by the ID ********************///////
// const grandparent = document.getElementById("grandparent-id")
////////********************** grandparent ***********************///////
// const grandparent = document.querySelector(".grandparent")
// grandparentColor(grandparent);
/** Create a Function for grandparentColor */
// function grandparentColor(element){
//     element.style.backgroundColor = "#333"
// }
/** getting children of grandparent */
// const parents = Array.from(grandparent.children)
// parents.forEach(grandparentColor)
/** getting children of parents */
// const parentOne = parents[0]
// const children = parentOne.children
// grandparentColor(children[0])
/** grandparent to child */
// const childOne = grandparent.querySelector('.child')
// grandparentColor(childOne);
/** color all of children */
// const children = grandparent.querySelectorAll('.child')
// children.forEach(grandparentColor)
/** Making the grandparent Grey you can do it like this or make a function
 * grandparent.style.backgroundColor ="#333"
 * function grandparentColor(element){
    element.style.backgroundColor = "#333"
 * }
 * */
////////********************** child to parent to grandParent ***///////
// const childOne = document.querySelector("#child-one")
// const parent = childOne.parentElement
// const grandparent = parent.parentElement
// changeColor(grandparent)
function changeColor(element){
    element.style.backgroundColor = "#333"
}
////////********************** child to grandParent **********///////
// const childOne = document.querySelector("#child-one")
// const grandparent = childOne.closest(".grandparent")
// changeColor(grandparent)
////////********************** sibling elements *************///////
const childOne = document.querySelector("#child-one")
const childTwo = childOne.nextElementSibling
// changeColor(childTwo);
/** moving back one sibling */
changeColor(childTwo.previousElementSibling)
////////********************** parent ***********************///////
// const parent = document.querySelector('.parent')
// parentColor(parent);
// function parentColor(element){
//     element.style.backgroundColor ="#333"
// }
////////********************** All parents ***********************///////
// const parents = document.querySelectorAll('.parent')
// parents.forEach(allParentsColor)
// function allParentsColor(element){
//     element.style.backgroundColor = "#333"
// }

