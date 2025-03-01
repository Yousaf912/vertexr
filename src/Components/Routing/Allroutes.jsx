import { createBrowserRouter, Navigate } from "react-router";
import App from "../../App";
import Login from "../Login/Login";
const userdata = JSON.parse(sessionStorage.getItem('userData'));



export const AllRoutes = createBrowserRouter([
  {
    path: "/home",
    element:  <App />,
  },
  {
    path: "/login",
    element:  <Login />,
  },
  {
    path: "/",
    element: <App/>,
  },
 
]);
