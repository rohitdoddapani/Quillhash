import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title,desc)
      setTitle('')
      setDesc('')
    } else {
      editTask(title,desc, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  const handleDesc = e => {
    setDesc(e.target.value)
  }


  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      setDesc(editItem.desc)
      console.log(editItem)
    } else {
      setTitle('')
      setDesc('')
    }
  }, [editItem])

  return (
    <div>
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <input
        type="text"
        placeholder="Task Description..."
        value={desc}
        onChange={handleDesc}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button className="btn add-btn-btn" onClick={clearList}>
          Clear
        </button>
        
      </div>
    </form>
  </div>
  )
}

export default TaskForm
