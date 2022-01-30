import React from 'react'

const Header = props => (
        <div className='header'>
            <div className="container">
                <h1>Indecision App</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        </div>
        )

export default Header