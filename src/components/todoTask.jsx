import React from 'react';

import '../assets/style/tasklist.css';

import Task from './task.jsx';

export default class TodoTasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: ""
        }

        this.filterTask = this.filterTask.bind(this);
    }

    filterTask(event){
        this.setState({
            filter: event.target.value
        });
    }

    render(){
        const filteredTasksList = this.props.tasks.filter( task => {
            if(this.state.filter.trim() === ""){
                return true;
            }
            return task.description.includes(this.state.filter.trim());
        });

        const tasksList = filteredTasksList.map(task => 
            <Task 
                key={task.id}
                taskId={task.id}
                description={task.description}
                priority={task.priority}
                updateTaskPriority={this.props.updateTaskPriority}
                taskDone={this.props.taskDone}/> 
        );

        const reducer = (prev, current) => prev+current.duration;
        const totalMinutes = this.props.tasks.reduce(reducer, 0);


        return <div className="tasklist">
            <h3>Tâches en cours</h3>
            <input type="text" onChange={this.filterTask} placeholder="filter"/>
            <p>Il ya {this.props.tasks.length} taches en cours. Pour une durée de {totalMinutes} mn.</p>
            {tasksList}
        </div>
    }
}