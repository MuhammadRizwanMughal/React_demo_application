import React, {Component} from 'react'
import LoginView from './Login_view'
import { Route, Redirect } from 'react-router'
import ErrorMessages from '../authErrors/authErrors'
import {LoggedIn} from '../isLoggedIn'
import Navbar from '../Navigationbar/Navigationbar_view'
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
            uid: '',
            expiry: '',
            client: ''
        }
    }

    componentDidMount(){
        if(LoggedIn())
        {
            this.setState({isLoggedIn: true});
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
                this.setState({
                    isLoggedIn: true,
                    token: res.headers['access-token'],
                    uid: res.headers['uid'],
                    expiry: res.headers['expiry'],
                    client: res.headers['client'],
                },() => {
                    localStorage.setItem('access-token', this.state.token);
                    localStorage.setItem('uid', this.state.uid);
                    localStorage.setItem('expiry', this.state.expiry);
                    localStorage.setItem('client', this.state.client);
                });
            })
            .catch(error => {
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
        if(this.state.isLoggedIn){
            return <Redirect to='/post' />
        }
        
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
            <div>
                <Navbar/>
                <div className='form--parent-div'>
                {messages}
                <LoginView
                changeHandler={(event)=> this.changeHandler(event)}
                onclick = {() => this.loginHandler()}
                />
            </div>
            </div>
        );

    };
}

export default login;