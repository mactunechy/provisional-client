import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DiagramContainer from '../../../shared/components/DiagramContainer';
import {Card, CardHeader, CardBody, Row, Col} from 'reactstrap';
import diagram from './diagram.png';

const style = {
  fontSize: '1.2em',
};

function NotesDetails (props) {
  const {currentNotes} = props;
  return (
    <React.Fragment>
      {currentNotes &&
        <Row>
          <Card>
            <CardHeader className="h4">
              Notes <br />
              <small className="text-muted">{currentNotes.id}</small>
            </CardHeader>
            <CardBody>
              <DiagramContainer src={diagram} />
              <p style={style}>{currentNotes.description}</p>
            </CardBody>
          </Card>
        </Row>}
      {currentNotes &&
        currentNotes.examples &&
        currentNotes.examples.map ((eg, idx) => (
          <Row>
            <Card key={idx}>
              <CardHeader className="h4">
                Example
                <small className="text-muted ml-2">{idx + 1}</small>
              </CardHeader>
              <CardBody>
                {<DiagramContainer src={diagram} />}
                <p style={style}>{eg.description}</p>
                <br />
                <Row>
                  {eg.multipleChoice.map ((answer, idx) => (
                    <Col key={idx} sm={4}>
                      <h5>{answer.letter} : {answer.description}</h5>
                    </Col>
                  ))}
                </Row>
                <h4 className="float-right mt-4">
                  Answer : {eg.answer.letter}
                </h4>
              </CardBody>
            </Card>
          </Row>
        ))}
    </React.Fragment>
  );
}

NotesDetails.propTypes = {
  currentNotes: PropTypes.shape ({
    id: PropTypes.string.isRequired,
    diagram: PropTypes.string,
    examples: PropTypes.arrayOf (
      PropTypes.shape ({
        description: PropTypes.string.isRequired,
        multipleChoice: PropTypes.arrayOf (
          PropTypes.shape ({
            letter: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
          })
        ).isRequired,
        answer: PropTypes.shape ({
          letter: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }).isRequired,
      })
    ),
  }),
};

const mapStateToProps = state => ({
  currentNotes: state.notes.currentNotes,
});

export default connect (mapStateToProps) (NotesDetails);
