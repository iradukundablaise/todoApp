import React from 'react';
import '../assets/style/task.css';

export default class DoneTasks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.toggleShowTaskList = this.toggleShowTaskList.bind(this);
    }

    toggleShowTaskList(){
        let show = this.state.show;
        this.setState({
            show: !show
        });
    }

    render(){
        let taskList = this.props.tasks.map(task => {
            return (
                <div className="task" key={task.id}>
                    <div className="info">{task.description}</div>
                </div>
            );
        })

        return <div className="tasklist doneTask">
            <div>
                <h3>Taches terminées</h3>
                <button onClick={() => this.toggleShowTaskList() }>
                    { this.state.show ? "-": "+"+ this.props.tasks.length}
                </button>
            </div>
            { this.state.show ? taskList : null }
        </div>
    }
}