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

// JavaScript Basics

// Working with JavaScript Variables and Data types
// Concatenation means combining multiple strings.
// id = 7 + 3;
// id = id - 2;
// id = id * 4;
// id = id / 4;
// console.log(id);
// fiveDs = ["Dodge", "Duck", "Dip", "Dive", "Dodge"];
// console.log(fiveDs);
// console.log(fiveDs.length);
// console.log(fiveDs[0]);
// console.log(fiveDs[0] + fiveDs[2]);

// Basic JavaScript if Statements
// Falsey values in JavaScript
// false, null, undefined, 0, "", '', NaN
// var first_name = "Ricky";
// var last_name: "Bobby";
// var age = 45;
// var first = true;
// var last = false;
//
// if (age === 45){
// } else {
// }

// Logical Operators AND and OR with Compound if Statements
// let ingredients = ['lettuce', 'cheddar', 'ham'];
//
// let sandwichHas = function(ingredients){
//     for (let i of ingredients){
//         if (i == ingredients){
//             return true;
//         }
//     }
//     return false;
// }
// if (sandwichHas('cheddar') || sandwichHas('chicken') || sandwichHas('beef')){
//     console.log('Sandwich has meat')
// } else {
//     console.log('Sandwich has no meat')
// }

// Ternary Statements
// (first == last) ? console.log(true): console.log(false);

// Introduction to Arrays with JavaScript
// var characters = ['Luke', 'Lefa', 'Han', 'Chewie'];
// console.log(characters);
// console.log(characters.length);
// console.log(characters.length-1);
// console.log(characters.push('Anakin'));
// console.log(characters);
// console.log(characters.pop('Obiwan'));
// console.log(characters);
// characters.unshift('CP30');
// characters.unshift('R2D2');
// characters.shift();
// console.log(characters);

// Manipulating and sorting arrays in JavaScript
// Splicing removes items 0 and 1 and replaces with Rey
// var characters = ['Luke', 'Lefa', 'Han', 'Chewie'];
// console.log(characters);
// characters.splice(0, 1, 'Rey');
// console.log(characters);
// characters.splice(2, 2, 'C3PO');
// console.log(characters);
// characters.push('BBB');
// characters.push('Obiwan');
// console.log(characters);
// characters.reverse()
// console.log(characters);
// console.sort();
// console.log(characters);
// let position = characters.indexOf('Luke');
// console.log(position);

// Playing with JavaScript Object
// Objects are inside curly brackets.
// var dog = {
//     "name": "Woody",
//     "type":"dog"
// };
// var cat = {
//     "name": "Bob",
//     "type": "cat"
// };
//
// var petNames = ["Woody", "Bob"]
// console.log(petNames);
// var pets = [dog, cat];
// console.log(pets);
//
// pets.push({"name":"Roxy", "type":"dog"});
// console.log(pets[2]);
//
// cat.age = 2;
// dog["age"] = 14;
// console.log(pets);
//
// pets[0].age = 14;
// pets[2]["age"] = 6;
// console.log(pets);
//
// pets[1].age = 3;
// pets[1].hungry = true;
// console.log(pets);

// JavaScript for loops
// let names = ['Jeff Lebowski', 'Donnie Kerabatsos', 'Walter Sobchak', 'Bunny Lebowski', 'Jackie Treehorn'];
// let numNames = names.length;
// for(let i = 0; i = numNames; i++){
// console.log(names[i])
// }

// Manipulating and Sorting Arrays in JavaScript
// var monsters = {
//     'Canada':'Sasquatch',
//     'Nepal':'Yeti',
//     'Scotland':'Loch Ness Monster'
// };
// var pets = ["Woody", "Roxy", "Bob"];
// // console.log(monsters.length);
// // var in object
// for (let properties in monsters){
//     // console.log(properties);
//     // console.log(monsters[properties]);
//     console.log("In", properties, "we have the", monsters[properties]);
// }

// JavaScript While and Do.. While Loops
// let total = 0;
//
// // while (total < 30){
// //     total += Math.floor(Math.random() * 5) + 1;
// //     console.log(total);
// // }
//
// do{
//     total += Math.floor(Math.random() * 5) + 1;
//     console.log(total)
// }
// while(total < 30);

// Introduction to functions in JavaScript
// let beer_cost = 6.75;
// let burger_cost = 5.00;
// let pop_cost = 3.00;
// let account_balance = 15.75;
//
// function drink_beer(){
//     account_balance = account_balance - beer_cost;
//     console.log(account_balance);
// }
// // Call function
// drink_beer();

// Javascript Section-19
// for(let i = 1; i <= 10; i++){
//     // console.log("I am in the loop body");
//     // console.log(i)
//     console.log("where am I"[i]);
// }
for(;;){

}









