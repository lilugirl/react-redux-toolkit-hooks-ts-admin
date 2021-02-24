import React from 'react';
import {Button} from 'antd';
import { TOKEN } from 'core/constants';
const Login=()=>{
    return (<div>Login  

        <Button onClick={()=>{localStorage.setItem(TOKEN,'abc');window.location.href="/"}}> 登录</Button>
    </div>)
}

export default Login;