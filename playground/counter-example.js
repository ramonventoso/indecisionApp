class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        const count = parseInt(localStorage.getItem('counterInit'), 10)
        if (!isNaN(count)) {
            this.setState(() => ({count})) 
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('counterInit', this.state.count)
        }
        
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button> 
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))


// let count = 0

// const addOne = () => {
//     count++
//     show()
// } 

// const minusOne = () => {
//     count--
//     show()
// }

// const reset = () => { 
//     count = 0 
//     show()
// }

// const show = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="plusBtn" className="plusButton" onClick={addOne}>+!</button>
//             <button id="minusBtn" className="minusButton" onClick={minusOne}>-!</button>
//             <button id="resetBtn" className="resetButton" onClick={reset}>Reset!</button>
//         </div>
//     )
//     const rootEl = document.getElementById('app')
//     ReactDOM.render(templateTwo, rootEl)
// }

// show()