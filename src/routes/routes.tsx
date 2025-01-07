import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
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
