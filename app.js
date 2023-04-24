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

const todo = document.querySelector('#todos .todo');
todo.style.color = 'gray';
todo.style.decoration = 'line-through';
todo.style.opacity = '50%';

const newImg = document.createElement('img');
newImg.src = 'https://www.google.com';
newImg.style = "300px";
document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Mr. Bubz Video! Click here';
newLink.href = 'www.youtube.com';

const firstP = document.querySelector('p');
firstP.appendChild(newLink);
