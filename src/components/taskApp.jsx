import React from 'react';


// import components
import AddTask from './addTask.jsx';
import DoneTasks from './doneTask.jsx';
import TodoTasks from './todoTask.jsx';

import '../assets/style/taskApp.css';
import tasks from '../data/tasksData.js';

export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      done: [],
    }

    this.addTodoTask = this.addTodoTask.bind(this);
    this.updateTaskPriority = this.updateTaskPriority.bind(this);
    this.taskIsDone = this.taskIsDone.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    this.emptyLocalStorage = this.emptyLocalStorage.bind(this);
  }

  updateLocalStorage(stateData){
    localStorage.setItem("tasks", JSON.stringify(stateData));
  }

  emptyLocalStorage(event){
    event.preventDefault();
    localStorage.removeItem("tasks");
    const tasksData = tasks.map(task => {
      task.priority = 1;
      return task;
    });

    const stateData = {
      todo: tasksData,
      done: []
    }
    this.setState(stateData);
  }

  componentDidMount(){
    let localTasksData = localStorage.getItem("tasks");

    if(localTasksData){
      const data = JSON.parse(localTasksData);
      this.setState({
        todo: data.todo,
        done: data.done
      });
    }
    
    /* else{
      const tasksData = tasks.map(task => {
        task.priority = 1;
        return task;
      });

      const stateData = {
        todo: tasksData,
        done: []
      }

      this.setState(stateData);
      this.updateLocalStorage(stateData);
    }
    */  
  }

  addTodoTask(description, duration){
    const n = this.state.todo.length + this.state.done.length+1;
    let task = {
      id: `T${n}`,
      description: description,
      duration: parseInt(duration),
      priority: 1
    }
    const stateData = {
      todo: [...this.state.todo, task],
      done: this.state.done
    }
    this.setState(stateData);
    this.updateLocalStorage(stateData);
  }

  updateTaskPriority(id, priority){
    const index = this.state.todo.findIndex( task => task.id === id);
    let tasks = this.state.todo;
    if(index >= 0){
      tasks[index]['priority'] = priority;
      const stateData = {
        todo: tasks.sort((a,b) => b.priority-a.priority),
        done: this.state.done
      }

      this.setState(stateData);  
      this.updateLocalStorage(stateData);
    }
  }

  taskIsDone(id){
    const index = this.state.todo.findIndex( task => task.id === id);

    if(index >= 0){
      let tasks = this.state.todo.filter(task => task.id != id);
      let doneTask = this.state.todo[index];
      const stateData = {
        todo: tasks,
        done: [...this.state.done, doneTask]
      }
      this.setState(stateData);
      this.updateLocalStorage(stateData);
    }
  }

  render() {
    return (
      <div className="taskApp">
        Todo List App (with React JS)
        <AddTask addTodoTask={this.addTodoTask}/>
        <TodoTasks 
          tasks={this.state.todo}
          taskDone={this.taskIsDone}
          updateTaskPriority={this.updateTaskPriority}/>
        <DoneTasks tasks={this.state.done} />
        <div>
          <button className="viderStorage" onClick={this.emptyLocalStorage}>Reset/Vider le localStorage</button>
        </div>
      </div>
    );
  }
}
