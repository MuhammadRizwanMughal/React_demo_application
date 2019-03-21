import React, { Component } from 'react';
import RegistrationView from './registration_view'
import ErrorMessages from '../authErrors/authErrors'
import { Route, Redirect } from 'react-router'
import axios from 'axios'
class registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCreated: false,
            name: '',
            email: '',
            password: '',
            errors: [],
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    registrationHandler = () => {
        let params = this.state;
        axios.post(`http://localhost:5000/auth`, { email: params.email, password: params.password })
            .then(res => {
                this.setState({isCreated: true});
            })
            .catch(error => {
                console.log(error.response.data.errors.full_messages);
                this.setState({
                    errors: error.response.data.errors.full_messages,
                }, () => {
                    console.log(this.state.errors)
                });
            });
    }

    redirect = () =>
    {
        return <Redirect to='/login'/>;
    }

    render() {
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
        return (
            <div className='form--parent-div'>
            {this.state.isCreated ? this.redirect() : null}
                {messages}
                <RegistrationView
                    onclick={() => this.registrationHandler()}
                    changeHandler={(event) => this.changeHandler(event)}
                >
                </RegistrationView>
            </div>
        );
    }
}

export default registration;
