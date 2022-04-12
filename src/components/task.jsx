import React from 'react';

import PriorityScale from './priorityScale.jsx';
import DoneButton from './doneButton.jsx';


import '../assets/style/task.css';
import '../assets/style/doneButton.css';


const Task = (props) => {
    return (
        <div className="task">
            <div className="info">{props.description}</div>
            <PriorityScale 
                taskId={props.taskId} 
                priority={props.priority} 
                updateTaskPriority={props.updateTaskPriority}
            />
            <DoneButton 
                taskId={props.taskId}
                taskDone={props.taskDone}/>
        </div>
    );
}

export default Task;