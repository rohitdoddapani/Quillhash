import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Task = ({ task }) => {
  const { removeTask,showDesc,completed, findItem } = useContext(TaskListContext)
  return (
    <div>
    <li className="list-item">
      <span style={{textDecoration: task.completed? 'line-through':''}}>{task.title} </span>
      <div>
      <button
          className="btn-delete task-btn"
          onClick={() => showDesc(task.id) }
        >
          <i className="fas fa-plus"></i>
        </button>{' '}
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
        <input type="checkbox" onClick={() => {completed(task.title,task.desc,task.id)}} />
      </div>
    </li>
    <span id={task.id}  className="hide">{task.desc}</span>
    </div>
  )
};


export default Task
