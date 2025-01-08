// import AdminDashboard from "../pages/admin/AdminDashboard";
// import CreateFaculty from "../pages/admin/CreateFaculty";
// import CreateStudent from "../pages/admin/CreateStudent";

const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

const adminRoutes = adminPaths.reduce((acc, item) => {
  //   console.log("item", item);
  //   console.log("acc", acc);
  if (item.element && item.path) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);
console.log(adminRoutes);
