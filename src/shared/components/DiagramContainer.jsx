import React from 'react'


const DiagramContainer = props => (
    <div className="container text-center mb-4" >
        <img src={props.src} alt="Diagram" className="img-responsive" style={{height : '200px',width: 'auto'}}/>
    </div>
)

export default DiagramContainer