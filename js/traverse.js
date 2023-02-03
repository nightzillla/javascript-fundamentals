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
/** grandParent */
// const grandparent = document.querySelector(".grandparent")
// grandparentColor(grandparent);
/** Create a Function for grandparentColor */
// function grandparentColor(element){
//     element.style.backgroundColor = "#ffff"
// }
/** Making the grandparent Grey you can do it like this or make a function
 * grandparent.style.backgroundColor ="#333"
 * function grandparentColor(element){
    element.style.backgroundColor = "#333"
 * }
 * */
////////********************** parent ***********************///////
const parent = document.querySelector('.parent')
parentColor(parent);
function parentColor(element){
    element.style.backgroundColor ="#333"
}


