import {createSlice} from '@reduxjs/toolkit';
import { THEME } from '../utils/constants';
import { RootState } from './index';

export const appSlice=createSlice({
   name:'app',
   initialState:{
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
       }
       
   }
})

export const  {SET_THEME,SET_LOADING} = appSlice.actions;
export const selectLoading=(state:RootState)=>state.app.loading;
export const selectTheme=(state:RootState)=>state.app.theme;
export default appSlice.reducer;