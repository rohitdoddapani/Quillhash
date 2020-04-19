import React, { Component } from 'react'
import './Login.css';
import {Link, Redirect} from 'react-router-dom';

export class Login extends Component {
    constructor(props){
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            dummy:'',
            password: ''
        };
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
                    dummy: obj.Email,
                })
            }else{
                
            }
        }
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }
    handleOnSubmit(e) {
        e.preventDefault();
        const {email,password} = this.state;
        var users = localStorage.getItem('Users');
        users = JSON.parse(users);
        console.log(users);
        if(users){
            for(var x=0;x<users.length;x++){
                var obj = users[x];
                if(obj.Email == email && obj.Password == password){
                    obj.current = true;
                    localStorage.setItem('Users',JSON.stringify(users));
                    this.props.history.push('/todos');
                    break;
                }else{
                    document.getElementById('err').style.display = 'block';
                }
            }
        }
        console.log(users);
    }
    render() {
        return (
            <div>
                {this.state.dummy
                ?
                    <Redirect to="/todos" />
                :
                    <div style={{marginTop: '150px'}}>
                        <form style={{textAlign: 'center'}} onSubmit={this.handleOnSubmit}>
                            <h2>Login to add Todo's!</h2>
                            <span id="err" style={{color:'red',fontSize:'27px',marginTop:'20px',display:'none'}}>Invalid Credentials</span>
                            <div className='form-group row'>
                                <input className='input' name="email" onChange={this.handleChange} type='text' placeholder='Email' required/>
                            </div>
                            <div className='form-group row'>
                                <input className='input' name="password" onChange={this.handleChange} type='password' placeholder='Password' required/>
                            </div>
                            <div className='form-group row'>
                                <button className='btn' type='submit'>Log In</button>
                                
                            </div>
                            <div className='form-group row' style={{marginTop: '20px'}}>
                                <Link className='btn' to="/register">Register Instead</Link>
                            </div>
                        </form>
                    </div>
                }
            </div>
            
        )
    }
}

export default Login
