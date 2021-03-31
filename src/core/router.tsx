import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { TOKEN, URL_LOGIN } from "core/constants";
export const RouterView = (props: any) => {
  const { routes } = props;
  const componentList = routes.filter((v: any) => v.component);
  const redirectList = routes.filter((v: any) => v.to);

  return (
    <Switch>
      {redirectList.map((v: any, i: number) => {
        return <Redirect exact from={v.from} to={v.to} key={i}></Redirect>;
      })}

      {componentList.map((v: any, i: number) => {
        console.log("comoponent list v", v);
        return (
          <Route
            path={v.path}
            key={i}
            render={(props: any) => {
              if (
                v.meta &&
                v.meta.needLogin &&
                !window.localStorage.getItem(TOKEN)
              ) {
                return <Redirect exact from={v.path} to={URL_LOGIN}></Redirect>;
              } else {
                return (
                  <v.component
                    exact
                    routes={v.children || []}
                    {...props}
                  ></v.component>
                );
              }
            }}
          ></Route>
        );
      })}
    </Switch>
  );
};

export default RouterView;
