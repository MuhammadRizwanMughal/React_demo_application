import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText }  from 'reactstrap';
import './registration.css'

const registration = (props) =>{
    return(
        <div className='form--parent-div'>
        <h2>Register</h2>
            <Form>
                <Label for='name'>Name</Label>
                <Input type='text' name='name' id='name' onChange = {props.changeHandler}/>
                <Label for='email'>Email</Label>
                <Input type='text' name='email' id='email' onChange = {props.changeHandler}/>
                <Label for='password'>Password</Label>
                <Input type='text' name='password' id='password'  onChange = {props.changeHandler}/>
                <div className='submit--button'>
                    <Button onClick={props.onclick}>Register</Button>
                </div>
            </Form>
        </div>
    );
}

export default registration;