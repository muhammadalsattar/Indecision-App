import React from 'react'
import AddOption from './Add-option'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './Option-modal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    componentDidMount(){
        const options = JSON.parse(localStorage.getItem('options'))
        if(options){
            this.setState(() => ({options}))
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length)
        {
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }
    }
    
    removeall = () => {

        this.setState(() => ({options: []}))
    }

    pickHandler = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => {
            return {
                selectedOption: option
            }
        })
    }

    removeOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    addOption = (text) => {
        if (!text) 
        {
            return 'Please enter a valid option!'
        }
        else if(this.state.options.indexOf(text) > -1)
        {
            return 'Option already exists!'
        }

        this.setState(prevState => ({options: prevState.options.concat([text])}))
    }

    removeElement = (optionContent) =>
    {
        this.setState(prevState => {
            return {
                options: prevState.options.filter(option => option !== optionContent)
            }
        })
    }

    render(){
        const subtitle = 'Put your life on the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action status={this.state.options.length < 1} pick={this.pickHandler}/>
                    <div className="widget">
                        <Options
                        options={this.state.options}
                        removeHandler={this.removeall}
                        removeEl={this.removeElement}
                        />
                        <AddOption handleaddoption={this.addOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} removeOption={this.removeOption}/>
            </div>
        )
    }
}