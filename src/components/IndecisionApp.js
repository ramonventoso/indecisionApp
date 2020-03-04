import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state =  ({
        options: [], 
        selectedOption: undefined
    })


    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    }

    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length)
        const selectedOption = this.state.options[random]
        this.setState(() => ({ selectedOption }) )
        
    }

    handleRemoveOption = (option) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((op) => op !== option) 
        }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}) ) 
    }

    componentDidMount() {
        const savedOptions = localStorage.getItem('options')
        if (savedOptions) {
            const options = JSON.parse(savedOptions)
            this.setState(() => ({ options})) 
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {       
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }
    }
  
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options options={this.state.options} 
                                    handleDeleteOptions={this.handleDeleteOptions} 
                                    handleRemoveOption={this.handleRemoveOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>                        
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>   
        )
    }
}