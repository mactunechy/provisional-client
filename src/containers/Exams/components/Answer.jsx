import React, {Component} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export class Answer extends Component {
  render () {
    return (
      <Modal onShow={true}>
        <ModalHeader>
          Answer
        </ModalHeader>
      </Modal>
    );
  }
}

export default Answer;
