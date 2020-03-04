import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// const app = {
//     title: 'Indecision App', 
//     subtitle : 'Simplifying your decision process', 
//     options: []
// }

// const onFormSubmit = (e) => {
//     e.preventDefault()
//     const option = e.target.elements.option.value
//     if (option) {
//         app.options.push(option)
//         console.log(option)
//     }
    
//     e.target.elements.option.value = ''
//     render()
// }

// const onRemoveAll = () => {
//     app.options = []
//     render()
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length)
//     const option = app.options[randomNum]
//     render()
//     alert(option)
    
// }
 
// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
//             <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
//             <ol>
//                 {app.options.map((option) => <li key={option}>{option}</li>)}
//             </ol>
//             <form onSubmit={onFormSubmit}>
//                 <input type="text" name="option"></input>
//                 <button>Add Option</button>
//             </form>
//             <button onClick={onRemoveAll}>Remove All</button>
//         </div>
//     )
    
//     ReactDOM.render(template, appRoot)
// }

// const appRoot = document.getElementById('app')
// render()

// // babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// // const and let are block scoped 
// // an arrow function doesn't bind its own this value
// // ES6 method definition syntax
// // form tag in html fills the query string when you have a text and a button
// // preventDefault()

// // JSX does not support objects. it supports numbers, strings, arrays. It supports (ingores) boolean, undefined and null

// state is defined in the component. props come from above. 
// state can be changed in the component. props are read-only. cannot be changed in the component
// that's why when your child component needs to modify parent's state, it cannot do it: a parent's func has to be passed
// to the child. the child calls it but the execution happens in the parent with the parent state.
// 

// local Storage esta en windows object. it is a dict i.e., it saves keys an values in strings
// JSON.parse can take an array string and parse it into an array
// JSON stringify can take an array and create a string like ["", "", ""]

// parsing an int is now parseInt
// parseInt takes two arguments the string to parse and the base, i.e., 10

// isNaN() is used to check if something is a number too

// getbem.com