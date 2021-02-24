import React,{Suspense} from 'react';
import './index.css';
import RouterView from '../../router';
import routes from '../../router/config';
import {useSelector} from 'react-redux';
import {selectTheme} from './store/appSlice';

function App() {
  const appTheme=useSelector(selectTheme);
  
  if(appTheme==='dark'){
      require('antd/dist/antd.dark.less')
    }else{
      require('antd/dist/antd.less');
    }
  return (
      <Suspense fallback={<></>}>
        <RouterView routes={routes}></RouterView>
      </Suspense>   
  );
}

export default App;
