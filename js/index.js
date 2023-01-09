// Select element by ID the fastest way since it’s looking for the specific element.
const button = document.getElementById('my-first-id-button');
const buttonTwo = document.querySelector(".my-second-button");
const buttonThree = document.querySelector('#my-third-button');

////////////////////////// USING getElementById ///////////////////////////////////////////////////////////////
button.addEventListener('click', function() {
    // This function will be called when the button is clicked
    alert('First Button was clicked!');
});
////////////////////////// USING querySelector  ///////////////////////////////////////////////////////////////
// note you can use variable or call it with querySelector
// buttonTwo.addEventListener('click', function() {
//    alert('Second button was clicked!');
// });

document.querySelector('.my-second-button').addEventListener('click', function () {
    alert('Second button was clicked!');
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
});

document.querySelector('#my-third-button').addEventListener('click', function (){
    alert('Third Button was clicked!');
    this.style.backgroundColor = 'blue';
    this.style.color = 'white';
});

// To call an element with a class name using vanilla JavaScript, you can use the getElementsByClassName method. This method returns a collection of elements that have the specified class name, as an array-like object.
let elements = document.getElementsByClassName('example');
console.log(elements)