import React from 'react'
import { Button, Form, Label, Input }  from 'reactstrap';

const login = (props) =>
{
    return(
        <div>
        <h2>Login</h2>
            <Form>
                <Label for='email'>Email</Label>
                <Input type='text' name='email' id='email' onChange = {props.changeHandler}/>
                <Label for='password'>Password</Label>
                <Input type='text' name='password' id='password'  onChange = {props.changeHandler}/>
                <div className='submit--button'>
                    <Button onClick={props.onclick}>Login</Button>
                </div>
            </Form>
        </div>
    );
}

export default login;