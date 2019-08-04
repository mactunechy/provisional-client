import React, {Component} from 'react';

import {Col, Row} from 'reactstrap';
import AddQuestionForm from './components/AddQuestionForm';

export class AddQuestion extends Component {
  handleSubmit = values => {
    console.log (values);
  };
  render () {
    return (
      <Row className="justify-content-center">
        <Col md={10} lg={8} className="p-4 bg-white">
          <div>
            <div className="account__head">
              <h3 className="account__title">
                Create Questions
              </h3>
              <h4 className="account__subhead subhead">
                Add  new driving test typical questions
              </h4>
            </div>
          </div>
          <hr className="mt-1 mb-3" />
          <AddQuestionForm />
        </Col>
      </Row>
    );
  }
}

export default AddQuestion;
