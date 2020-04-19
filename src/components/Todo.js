import React, { Component } from 'react';
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "../App.css";
import Header from "./Header";
import Login from './Login';

class Todos extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            index: ''
        }
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin(){
        var users = localStorage.getItem('Users');
        users = JSON.parse(users);
        console.log(users);
        for(var x=0;x<users.length;x++){
            var obj = users[x];
            if(obj.current === true){
                this.setState({
                    email: obj.Email,
                    index: x
                })
            }else{
                
            }
        }
    }
    render() {
        return (
            <div>
                {this.state.email
                ?
                    <TaskListContextProvider>
                        <div className="container">
                            <div className="app-wrapper">
                            <Header />
                            <div className="main">
                                <TaskForm />
                                <TaskList />
                            </div>
                            </div>
                        </div>
                    </TaskListContextProvider>
                :
                    <Login/>
                }
            </div>
        )
    }
}

export default Todos;