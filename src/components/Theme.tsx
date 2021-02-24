import React from 'react';
import {Button} from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import {SET_THEME,selectTheme} from '../modules/app/store/appSlice';
const Theme=()=>{
    const dispatch=useDispatch();
    const theme=useSelector(selectTheme);
  
    return (<>
    主题 ： {theme}
      <Button type="primary" onClick={
        ()=>{
           if(theme==='dark'){
            
             dispatch(SET_THEME('light'))
           }else{
             
             dispatch(SET_THEME('dark'));
           }
           
        }
      }>切换主题</Button>
    </>)
}

export default Theme;