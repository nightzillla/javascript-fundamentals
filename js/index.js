// Select element by ID the fastest way since it’s looking for the specific element.
const button = document.getElementById('my-first-button');
const buttonTwo = document.querySelector(".my-second-button");
const buttonThree = document.querySelector('#my-third-button');

// This is using getElementByID
button.addEventListener('click', function() {
    // This function will be called when the button is clicked
    alert('First Button was clicked!');
});
// THIS IS USING querySelector by class name
document.querySelector('.my-second-button').addEventListener('click', function () {
    alert('Second button was click!')
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
})
// buttonThree.addEventListener('click', function() {
//     // This function will be called when the button is clicked
//     alert('Third Button was clicked!');
// });
document.querySelector('#my-third-button').addEventListener('click', function (){
    alert('Third Button was clicked!');
    this.style.backgroundColor = 'blue';
    this.style.color = 'white';
});

// To call an element with a class name using vanilla JavaScript, you can use the getElementsByClassName method. This method returns a collection of elements that have the specified class name, as an array-like object.
let elements = document.getElementsByClassName('example');
console.log(elements)