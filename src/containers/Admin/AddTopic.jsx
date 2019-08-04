import React, {Component} from 'react';

import {Col, Row} from 'reactstrap';
import AddTopicForm from './components/AddTopicForm';

export class AddTopic extends Component {
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
                Create a Topic
              </h3>
              <h4 className="account__subhead subhead">
                new topic on driving tips
              </h4>
            </div>
          </div>
          <hr className="mt-1 mb-3" />
          <AddTopicForm />
        </Col>
      </Row>
    );
  }
}

export default AddTopic;
