import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { TOKEN,URL_LOGIN } from "core/constants";
export const RouterView=(props:any)=> {
  const { routes } = props;
  console.log('rotuer props',props);
  const componentList = routes.filter((v:any) => v.component );
  const redirectList = routes.filter((v:any) => v.to);

  return (
    <Switch>
     
      {componentList.map((v:any, i:number) => {
        console.log('comoponent list v',v);
        return (
          <Route
            path={v.path}
            key={i}
            render={(props:any) => {
              console.log('render component props',props);
              if (
                v.meta &&
                v.meta.needLogin &&
                !window.localStorage.getItem(TOKEN)
              ) {
                return <Redirect from={v.path} to={URL_LOGIN}></Redirect>;
              } else if (v.path==='*' && props.match.url!=='/'){
                return <Redirect from={v.path} to={'/notfound'}></Redirect>;
              }else if(v.path !=="*") {
                return (
                  <v.component
                    routes={v.children || []}
                    {...props}
                  ></v.component>
                );
              }else{
                return <Redirect from={redirectList[0].from} to={redirectList[0].to}></Redirect>;    
              }
            }}
          ></Route>
        );
      })}
   
     {redirectList.map((v:any, i:number) => {
        return <Redirect from={v.from} to={v.to} key={i}></Redirect>;
      })}

   
     

     
    </Switch>
  );
}

export default RouterView;