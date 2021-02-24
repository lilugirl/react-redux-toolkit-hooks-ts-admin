import {createSlice} from '@reduxjs/toolkit';
import { THEME } from '../../../core/constants';
import { RootState } from './index';

export const appSlice=createSlice({
   name:'app',
   initialState:{
    name:localStorage.getItem('app_name')?localStorage.getItem('app_name'):'app',
       loading:false,
       theme:window.localStorage.getItem(THEME)?window.localStorage.getItem(THEME):'light'
   },
   reducers:{
       SET_LOADING(state,action){
           state.loading=action.payload;
       },
       SET_THEME(state,action){
           state.theme=action.payload;
           window.localStorage.setItem(THEME,action.payload);
           window.location.reload();
       },
       SET_NAME(state,action){
           console.log('SET_NAME action',action);
           state.name=action.payload;
           window.localStorage.setItem('app_name',action.payload);
       }
       
   }
})

export const  {SET_THEME,SET_LOADING,SET_NAME} = appSlice.actions;
export const selectName=(state:RootState)=>state.app.name;
export const selectLoading=(state:RootState)=>state.app.loading;
export const selectTheme=(state:RootState)=>state.app.theme;
export default appSlice.reducer;