import React, {Component} from 'react'
import LoginView from './Login_view'
import { Route, Redirect } from 'react-router'
import ErrorMessages from '../authErrors/authErrors'
import axios from 'axios'

class login extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            token: '',
            errors: [],
            uid: null,
            expiry: null
        }
    }

    changeHandler = (e) =>
    {
        this.setState({
            [e.target.name]: e.target.value
        }, ()=>{
            console.log(this.state);
        });
    }
    loginHandler = () => 
    {
        const {email, password} = this.state;
        console.log('login handler called handler called');
        axios.post(`http://localhost:5000/auth/sign_in`, { email: email, password: password })
            .then(res => {
                console.log(res.headers['access-token'])
                this.setState({
                    isLoggedIn: true,
                    token: res.headers['access-token'],
                    uid: res.headers['uid'],
                    expiry: res.headers['expiry']
                },() => {
                    localStorage.setItem('token', this.state.token);
                    localStorage.setItem('uid', this.state.uid);
                });
            })
            .catch(error => {
                console.log(error)
                debugger
                this.setState({
                    errors: error.response.data.errors,
                }, () => {
                    console.log(this.state.errors)
                })
            });
    }

    redirect = () =>
    {
        return <Redirect to='/post'/>
    }

    render(){
        let messages = null;
        messages = (
            <div>
                {
                    this.state.errors.map(error => {
                        return(<ErrorMessages value = {error} />);
                    })
                }
            </div>
        );
        return(
            <div className='form--parent-div'>
                {messages}
                <LoginView
                changeHandler={(event)=> this.changeHandler(event)}
                onclick = {() => this.loginHandler()}
                />
            </div>
        );

    };
}

export default login;