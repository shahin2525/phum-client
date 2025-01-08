import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./adminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/admin",
    element: <App></App>,
    children: adminPaths,
  },
  // {
  //   path: "/admin2",
  //   element: <AdminLayout></AdminLayout>,
  //   children: [
  //     {
  //       index: true,
  //       element: <AdminDashboard></AdminDashboard>,
  //     },
  //     {
  //       path: "dashboard",
  //       element: <AdminDashboard></AdminDashboard>,
  //     },
  //     {
  //       path: "create-faculty",
  //       element: <CreateFaculty></CreateFaculty>,
  //     },
  //   ],
  // },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  // {
  //   path: "/admin-layout",
  //   element: <AdminLayout></AdminLayout>,
  //   children: [
  //     {
  //       path: "create-faculty",
  //       element: <CreateFaculty></CreateFaculty>,
  //     },
  //     {
  //       path: "create-student",
  //       element: <CreateStudent></CreateStudent>,
  //     },
  //   ],
  // },
]);
export default router;
