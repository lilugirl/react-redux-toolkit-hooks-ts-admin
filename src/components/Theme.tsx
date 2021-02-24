import React from 'react';
import {Button} from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import {SET_THEME,selectTheme} from '../store/appSlice';
const Theme=()=>{
    const dispatch=useDispatch();
    const appTheme=useSelector(selectTheme);
  
    if(appTheme==='dark'){
        require('antd/dist/antd.dark.less')
      }else{
        require('antd/dist/antd.less');
      }
    return (<>
    主题 ： {appTheme}
      <Button type="primary" onClick={
        ()=>{
           if(appTheme==='dark'){
            
             dispatch(SET_THEME('light'))
           }else{
             
             dispatch(SET_THEME('dark'));
           }
           
        }
      }>切换主题</Button>
    </>)
}

export default Theme;