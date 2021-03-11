import React, { Suspense } from "react";
import "./index.css";
import RouterView from "core/router";
import routes from "core/routes";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/appSlice";
// import RenderRoutes from 'core/routing';

function App(props: any) {
  console.log("app props", props);
  const appTheme = useSelector(selectTheme);

  if (appTheme === "dark") {
    require("antd/dist/antd.dark.less");
  } else {
    require("antd/dist/antd.less");
  }
  return (
    <Suspense fallback={<></>}>
      <RouterView routes={routes}></RouterView>
      {/* <RenderRoutes routes={routes}></RenderRoutes> */}
    </Suspense>
  );
}

export default App;
