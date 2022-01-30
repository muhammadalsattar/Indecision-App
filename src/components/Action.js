import React from 'react'

const Action = props => (
        <button className="big-button" disabled={props.status} onClick={props.pick}>What should I do?</button>
    )

export default Action