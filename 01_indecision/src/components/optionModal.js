import React from 'react';
import Modal from 'react-modal';
import {Button} from "semantic-ui-react";

Modal.setAppElement("#app");

// using implicit return
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleCloseModal}
        contentLabel={"Selected Option"}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <Button onClick={props.handleCloseModal}>Okay</Button>
    </Modal>
);

export { OptionModal };
