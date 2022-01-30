import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('app'));

const OptionModal = props => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.removeOption}
            contentLabel="Example Modal"
            closeTimeoutMS={200}
            className="modal"
        >
            <h1 className="modal__title">Selected Option</h1>
            {props.selectedOption && <h3 className="modal__body">{props.selectedOption}</h3>}
            <button className="button" onClick={props.removeOption}>Okay</button>
        </Modal>
    )
}

export default OptionModal