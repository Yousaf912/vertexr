import { createBrowserRouter, Navigate } from "react-router";
import App from "../../App";
import Login from "../Login/Login";



export const AllRoutes = createBrowserRouter([
  {
    path: "/home",
    element:  <App />,
  },
  {
    path: "/login",
    element:  <Login />,
  },
 
]);
