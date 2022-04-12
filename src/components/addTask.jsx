import React from 'react';

import '../assets/style/addtask.css';

export default class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: "",
            duration: 10
        }

        this.descriptionChange = this.descriptionChange.bind(this);
        this.durationChange = this.durationChange.bind(this);
        this.addTodoTask = this.addTodoTask.bind(this);
    }

    descriptionChange(event){
        this.setState({
            description: event.target.value,
            duration: this.state.duration
        });
    }

    durationChange(event){
        this.setState({
            description: this.state.description,
            duration: parseInt(event.target.value)
        });
    }

    addTodoTask(){
        if(this.state.description != ""){
            this.props.addTodoTask(this.state.description, this.state.duration);
        }
    }

    render(){
        return <div className="addTask">
            <input type="text"  placeholder="description" onChange={this.descriptionChange}/>
            <input type="number" min="10" defaultValue="10" onChange={this.durationChange}/>mn
            <button onClick={ this.props.add} onClick={ this.addTodoTask }>add</button>
        </div>
    }
}