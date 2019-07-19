import React from 'react';
import {Modal, ModalBody, ModalTitle, Alert} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Answer = props => {
  return (
    <Modal show={props.show}>
      <ModalTitle>
        {props.myAnswer &&
          <Alert style={{borderRadius: 0}} variant={props.myAnswer.className}>
            {props.myAnswer.message}
          </Alert>}
      </ModalTitle>
      <ModalBody className="pl-4" style={{height: '200px'}}>
        {props.correctAnswer &&
          <React.Fragment>
            <h3 className="text-success mb-3">Answer</h3>

            <h5>
              <button
                style={{borderRadius: '50%'}}
                className="btn btn-secondary btn-sm btn-icon px-2 m-0 py-0 rounded mr-2"
              >
                {props.correctAnswer.letter}
              </button>
              {props.correctAnswer.description}
            </h5>

            {props.isExam &&
              <p className="text-muted mt-5">
                <span className="text-primary">Next</span> question coming up!
              </p>}

          </React.Fragment>}
      </ModalBody>
    </Modal>
  );
};

Answer.propTypes = {
  show: PropTypes.bool,
  correctAnswer: PropTypes.shape ({
    letter: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  myAnswer: PropTypes.shape ({
    message: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  }),
  isExam: PropTypes.bool,
};

export default Answer;
