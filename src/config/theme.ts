import {store} from '../store/index';
const {darkThemeSingle,getThemeVariables} =require('antd/dist/theme');
export const theme=store.getState().app.theme==='dark'? darkThemeSingle:getThemeVariables();

