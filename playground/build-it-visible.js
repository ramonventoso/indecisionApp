class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }

    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide ' : 'Show '}Details</button>
                {this.state.visibility  && <div><p>Hey! these are some details that you can now see!</p></div>}
            </div>
        )
    }
}

const rootApp = document.getElementById('app')

ReactDOM.render(<VisibilityToggle />, rootApp)



// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide ' : 'Show '}Details</button>
//             {visibility  && <div><p>Hey! these are some details that you can now see!</p></div>}
//         </div>
//     )
    
//     ReactDOM.render(jsx, rootApp)
// }

// render()