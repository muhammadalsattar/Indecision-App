import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const text = e.target.elements.option.value.trim();
        const error = this.props.handleaddoption(text);

        this.setState(() => ({error: error}))

        if(!error)
        {
            e.target.elements.option.value = ''
        }
    }
    render(){
        return (
            <div>
            {this.state.error?<p className="add-option-error">{this.state.error}</p>:undefined}
            <form className="add-option" onSubmit={this.handleAddOption}>
                <input autoComplete="off" className="add-option__input" type="text" name="option"></input>
                <button className="button" type="submit">Add Option</button>
            </form>
            </div>
        )
    }
}