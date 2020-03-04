import {square, add} from './utils.js'
import  isSenior, {isAdult, canDrink } from '../playground/person.js/index.js'
import React from 'react'
import ReactDOM from 'react-dom'


console.log('app.js is running!!')

console.log(square(10))

console.log(add(100, 23))

console.log(`At 18 you are${isAdult(18) ? ' ' : ' not '}an adult in Ontario, Canada`)

console.log(`At 18 you can${canDrink(18) ? '' : 'not'} drink in Ontario, Canada`)

console.log(isSenior(52))

const template = (
    <div>
        <p>testing 123</p>
    </div>
)


ReactDOM.render(template, document.getElementById('app'))

