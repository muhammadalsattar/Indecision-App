import React from 'react'
import Option from './Option'

const Options = props => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button className="button button--link" onClick={props.removeHandler}>Remove all</button>
            </div>
            {props.options.length < 1 && <p className="widget__message">There's no options for now!</p>}
            {
                props.options.map(option => <Option key={option} text={option} remove={props.removeEl}/>)
            }
        </div>
    )

export default Options