import React from "react";
import { Switch, Route } from "react-router-dom";
const RenderRoutes = ({ routes, switchProps, extraProps }: any) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route: any, i: number) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props: any) => (
            <route.component {...props} {...extraProps} route={route} />
          )}
        />
      ))}
    </Switch>
  ) : null;

export default RenderRoutes;
