import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const users = JSON.parse(localStorage.getItem('Users')) 
  var y;
  var em;
  for(var x=0;x<users.length;x++){
    var obj = users[x];
    if(obj.current == true){
        y=x;
        em = obj.Email;
        break;
    }else{
     console.log('error'); 
    }
  }
  console.log(users[y].Tasks.length);
  if(users[y].Tasks.length == 0){
    var initialState = []
  }else{
    console.log(users[y]);
    console.log(users[y].Tasks);
    var initialState = users[y].Tasks
    console.log(initialState.length);
  }
  
  const [tasks, setTasks] = useState(initialState)
  console.log(tasks.length);
  useEffect(() => {
    users[y].Tasks = tasks;
    console.log(users);
    localStorage.setItem('Users', JSON.stringify(users));
  }, [tasks])

  const [editItem, setEditItem] = useState(null)

  // Add tasks
  const addTask = (title,desc) => {
    setTasks([...tasks, { title,desc,completed:false, id: uuid() }])
  }

  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const showDesc = id => {
    var ele = document.getElementById(id);
    if(ele.className === 'hide'){
      ele.className = 'show';
    }else{
      ele.className='hide';
    }
  }

  const completed = (title,desc,id) => {
    //const item = tasks.find(task => task.id === id);
    setTasks(
      tasks.map(task => {
        if(task.id === id) {
          return {
            title,desc,
            completed: !task.completed,id
          };
        }
        return task;
      })
    );

  }

  // Clear tasks
  const clearList = () => {
    setTasks([])
  }

  // Find task
  const findItem = id => {
    const item = tasks.find(task => task.id === id)

    setEditItem(item)
  }

  // Edit task
  const editTask = (title,desc, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title,desc, id } : task))

    setTasks(newTasks)
    setEditItem(null)
  }

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        showDesc,
        clearList,
        findItem,
        editTask,
        completed,
        editItem
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
