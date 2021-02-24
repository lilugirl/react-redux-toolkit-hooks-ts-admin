import React from 'react';
import {Button} from 'antd';
import { TOKEN } from 'core/constants';
const Logout=()=>{
    return (
        <Button onClick={()=>{
            window.localStorage.removeItem(TOKEN);
            window.location.reload();
        }}>
        登出
        </Button>
    )
}

export default Logout;