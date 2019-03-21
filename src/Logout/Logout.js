import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const logout = () =>
{
    localStorage.removeItem('uid');
    localStorage.removeItem('token');
    return(<Redirect to= '/login' /> );
}

export default logout;