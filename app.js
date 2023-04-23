// Document: The document object is our entry point into the world of the DOM.
// It contains representations of all the content on a page, plus tons of useful
// methods and properties

document.getElementById('bear-photo')
document.getElementsByTagName('input')
const ul = document.getElementsByTagName('ul')[0]
ul.getElementsByTagName('li')

// Query Selector: is a newer all-in-one method to select a single element.
document.querySelector('h1')
document.querySelector('#bear-photo')
document.querySelector('.special')