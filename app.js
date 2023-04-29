// Document: The document object is our entry point into the world of the DOM.
// It contains representations of all the content on a page, plus tons of useful
// methods and properties

// document.getElementById('bear-photo')
// document.getElementsByTagName('input')
// const ul = document.getElementsByTagName('ul')[0]
// ul.getElementsByTagName('li')
//
// // Query Selector: is a newer all-in-one method to select a single element.
// document.querySelector('h1')
// document.querySelector('#bear-photo')
// document.querySelector('.special')

// const allLi = document.querySelectorAll('li');
//
// for(let i = 0; i < allLi.length; i++){
//     allLi[i].innerText = "We are the champions"
//     console.log(allLi[i].innerText)
// }
//
// for(let li of allLi){
//     li.innerHTML = 'We are The Champions'
// }

// const allLi = document.querySelector('li');
// const colors = ['red', 'purple', 'orange';
//
// allLi.forEach((li, i) => {
//     const colors = colors[i];
//     li.style.color = colors;
// })

// const todo = document.querySelector('#todos .todo');
// todo.style.color = 'gray';
// todo.style.decoration = 'line-through';
// todo.style.opacity = '50%';
//
// const newImg = document.createElement('img');
// newImg.src = 'https://www.google.com';
// newImg.style = "300px";
// document.body.appendChild(newImg);
//
// const newLink = document.createElement('a');
// newLink.innerText = 'Mr. Bubz Video! Click here';
// newLink.href = 'www.youtube.com';
//
// const firstP = document.querySelector('p');
// firstP.appendChild(newLink);

// 2 ways NOT to Add Events
// the thing > event type > the code to run
// button > click > change the color
// input > hits return > get search results
// image > mouseover > display the image caption

// addEventListener
// const btn = document.querySelector('#clicker');
//
// btn.onclick = function(){
//     console.log('you clicked me');
// }
// btn.ondblclick = function(){
//     console.log('you clicked me');
// }

// const btn = document.querySelector('button');
//
// btn.onclick = function(){
//     console.log('You clicked me');
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   console.log('You clicked');
// })

// const btn = document.querySelector('button');
// btn.addEventListener('mouseover', function() {
//     btn.innerText = "Stop touching me";
// })
//
// window.addEventListener('scroll', function(){
//     console.log('Stop Scrolling');
// })
// const btn = document.querySelector('button');
//
// btn.addEventListener('mouseover', function(){
//     console.log('mouse over me');
//     const h = Math.floor(Math.random() * window.innerHeight);
//     const w = Math.floor(Math.random() * window.innerWidth);
//     btn.style.left = `${h}px`;
//     btn.style.left = `${w}px`;
//     btn.style.top = "100px";
// });
//
// btn.addEventListener('click', function(){
//     btn.innerText = 'you got me';
//     document.body.style.backgroundColor = 'green';
// });

// Events on Multiple elements
// const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'purple',
//     'indigo',
//     'violet'
// ];
// const h1 = document.querySelector('h1');
// const changeColor = function(evt){
//     h1.style.color = this.style.backgroundColor;
// }
//
// const container = document.querySelector('#boxes');
//
// for (let color of colors) {
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     box.classList.add('box');
//     container.appendChild('box');
//     box.addEventListener('click', changeColor);
//     }
// document.body.addEventListener('keypress', function(evt){
//
// })

// Key events: keypress, keyup, & keydown
// const input = document.querySelector('#username');
//
// input.addEventListener('keydown', function (){
//     console.log('key down');
// })
// input.addEventListener('keyup', function (){
//     console.log('key up');
// })
// input.addEventListener('keypress', function (){
//     console.log('key press');
// })
// const addItemInput = document.querySelector('#addItem');
// const itemsUl = document.querySelector('#items');
// addItemInput.addEventListener('keypress', function(e){
//     if(e.key === 'Enter'){
//         console.log(this.value);
//     }
// })

// Form events & Prevent Default
// const form = document.querySelector('#signup-form');
// const creditCard
// form.addEventListener('submit', function(e){
//     alert('submitted the form');
//     e.preventDefault();
// });
//
// const creditCardInput = document.querySelector('#cc');
// const termsCheckBox = document.querySelector('#terms');
// const veggieSelect = document.querySelector('#veggie');
//
// form.addEventListener('submit', function(e){
//     alert('submitted the form');
//     console.log('cc', creditCardInput.value);
//     console.log('terms', termsCheckBox.value);
//     console.log('veggieSelect', veggieSelect.value);
//     e.preventDefault();
// });

// Input and Change Events
// const creditCardInput = document.querySelector('#cc');
// const termsCheckBox = document.querySelector('#terms');
// const veggieSelect = document.querySelector('#veggie');
//
// const formData = {};
// creditCardInput.addEventListener('input', (e) => {
//     console.log('CC Changed!', e);
//     formData['cc'] = e.target.value;
// });

// Call Stack: The mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.
// How JS "knows" what function is currently being run and what functions are called within that function, etc.
// const repeat = (str, times) => {
//     let result = '';
//     for (let i = 0; i < times; i++){
//         result += str;
//     }
//     return result;
// }
// const scream = (str) => {
//     return str.toUpperCase() + '!!!';
// }
//
// const getRantText = (phrase) => {
//     let text = scream(phrase);
//     let rant = repeat(text, 8);
//     return rant;
// }
//
// const makeRant = (phrase, el) => {
//     const h1 = document.createElement('h1');
//     h1.innerText = getRantText(phrase);
//     el.appendChild(h1);
// }
//
// makeRant('I hate mayo', document.body);
// makeRant('If you have water', document.body);


