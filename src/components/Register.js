import React, { Component } from 'react'
import './Login.css';
import Login from './Login';
import { Redirect,Link } from 'react-router-dom';

export class Register extends Component {
    constructor(props){
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }
    handleOnSubmit(e) {
        e.preventDefault();
        const {email,password} = this.state;
        const details = {Email: email,Password: password,current:false,Tasks:[]}
        var existing = localStorage.getItem('Users');
        // existing = existing? JSON.parse(existing): [];
        if(existing){
            existing = JSON.parse(existing);
            console.log(existing.length);
            if(existing.length <3){
                existing.push(details);
                localStorage.setItem('Users',JSON.stringify(existing));
                this.props.history.push('/login');
            }else{
                alert('only 3 users can be register');
            }
        }else{
            existing=[];
            existing.push(details);
            localStorage.setItem('Users',JSON.stringify(existing));
            console.log('done');
            this.props.history.push('/login');
        }
        
    }
    render() {
        return (
            <div style={{marginTop: '150px'}}>
                <form style={{textAlign: 'center'}} onSubmit={this.handleOnSubmit}>
                <h2>Register here!</h2>
                <div className='form-group row'>
                    <input className='input' name="email" onChange={this.handleChange} type='text' placeholder='Email' required/>
                </div>
                <div className='form-group row'>
                    <input className='input' name="password" onChange={this.handleChange} type='password' placeholder='Password' required/>
                </div>
                <div className='form-group row'>
                    <button className='btn' type='submit'>Register</button>
                    
                </div>
                <div className='form-group row' style={{marginTop: '20px'}}>
                    <Link className='btn' to="/login">Login Instead</Link>
                </div>
                </form>
            </div>
        )
    }
}

export default Register
