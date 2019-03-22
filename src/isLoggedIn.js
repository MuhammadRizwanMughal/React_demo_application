export const LoggedIn = () =>
{
    const uid = localStorage.getItem('uid');
    const token = localStorage.getItem('access-token');
    if(uid && token)
    {
        return true;
    }
    else
    {
        return false;
    }
}