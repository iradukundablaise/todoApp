import React from 'react';
import '../assets/style/priorityLevel.css';

const PriorityLevel = (props) => {
    let cls = "level "+(props.on === true ? "on": "off");
        let taskId = props.taskId;
        return (
            <div 
                className={cls} 
                onClick={(e) => props.updateTaskPriority(taskId, props.level) }>    
            </div>    
        );
}

export default PriorityLevel;