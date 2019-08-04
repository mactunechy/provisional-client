import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import DiagramContainer from '../../../shared/components/DiagramContainer';
import {Card, CardFooter, CardHeader, CardBody, Row, Col} from 'reactstrap';
import diagram from './diagram.png';
import ArrowBackCircleIcon from 'mdi-react/ArrowBackIcon';
import {bindActionCreators} from 'redux';
import {getCurrentNotes} from '../../../redux/actions/notes';

const style = {
  fontSize: '1.2em',
};

function NotesDetails (props) {
  const {currentNotes, getCurrentNotes} = props;
  return (
    <div className="container">
      {currentNotes &&
        <Row>
          <Card>
            <CardHeader className="h4">
              Notes <br />
              <small className="text-muted">{currentNotes.id}</small>
            </CardHeader>

            <CardBody>
              <div
                className=" custom-nav-link"
                onClick={() => getCurrentNotes (null)}
              >
                <ArrowBackCircleIcon className="bg-default" />
              </div>
              <DiagramContainer src={diagram} />
              <p style={style}>{currentNotes.description}</p>
            </CardBody>
          </Card>
        </Row>}
      {currentNotes &&
        currentNotes.example &&
        <Row>
          <Card key={currentNotes.example._id}>
            <CardHeader className="h4">
              Example
            </CardHeader>
            <CardBody>

              {<DiagramContainer src={diagram} />}
              <p style={style}>{currentNotes.example.description}</p>
              <br />
              <Row>
                {currentNotes.example.multipleChoice.map ((answer, idx) => (
                  <Col key={idx} sm={4}>
                    <h5>{answer.letter} : {answer.description}</h5>
                  </Col>
                ))}
              </Row>
              <h4 className="float-right mt-4">
                Answer : {currentNotes.example.correctAnswer.letter}
              </h4> <br />

            </CardBody>
            <CardFooter className="bg-white">
              <button
                className="btn btn-success float-right"
                onClick={() => getCurrentNotes (null)}
              >
                done
              </button>
            </CardFooter>
          </Card>
        </Row>}
    </div>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators ({getCurrentNotes}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (NotesDetails);
