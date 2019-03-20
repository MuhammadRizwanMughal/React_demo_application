import React, { Component } from 'react';
import Registration_view from './registration_view'
import axios from 'axios'
class registration extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            errors: {

            }
        }
    }

    changeHandler = (e) =>
    {
        this.setState({
                [e.target.name]: e.target.value
        });
    }

    registrationHandler = () =>
    {
        let params = this.state;
        axios.post(`http://localhost:5000/users`, { user: params })
        .then(res => {
            console.log(res);
          })
        .catch(function (error) {
            console.log(error.response.data);
       });
    }

    render(){
            return (<Registration_view 
                onclick = {() => this.registrationHandler()}
                changeHandler = {(event) => this.changeHandler(event)}
            >
            {this.state.errors}
            </Registration_view>
            );
        }
}

export default registration;
