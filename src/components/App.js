import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import Login from './Login';
import Register from './Register';
import Todos from './Todo';


const App = () => {
  return (
    // <TaskListContextProvider>
    //   <div className="container">
    //     <div className="app-wrapper">
    //       <Header />
    //       <div className="main">
    //         <TaskForm />
    //         <TaskList />
    //       </div>
    //     </div>
    //   </div>
    // </TaskListContextProvider>
    // <Login />
    <BrowserRouter>
      <Route exact path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/todos" component={Todos} />
      <Redirect from="/" to="/login" />
    </BrowserRouter>    
  );
};

export default App;
