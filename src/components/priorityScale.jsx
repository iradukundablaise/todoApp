import React from 'react';
import PriorityLevel from './priorityLevel.jsx';

const PriorityScale = (props) => {
    const scales = [1,2,3,4,5,6];
    const levels = scales.map( s => {
        if(s <= props.priority){
            return <PriorityLevel 
                key={s} 
                on={true} 
                level={s}
                taskId={props.taskId}
                updateTaskPriority={props.updateTaskPriority} /> 
        }else{
            return <PriorityLevel 
                key={s} 
                on={false}
                level={s}
                taskId={props.taskId}
                updateTaskPriority={props.updateTaskPriority} />
        }
    });

    return (
        <div className="scale">
            {levels}
        </div>
    );
}

export default PriorityScale;