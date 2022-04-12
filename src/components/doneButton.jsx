import React from 'react';
import checkImage from '../assets/images/check.png';


const DoneButton = (props) => {
    return (
        <div className="doneButton" onClick={ (e) => props.taskDone(props.taskId) }>
            <img src={checkImage} />
        </div>
    );
}

export default DoneButton;