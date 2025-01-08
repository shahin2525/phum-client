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

const sideVarItems = adminPaths.reduce((acc, item) => {
  if (item.name && item.element) {
    acc.push({
      key: item.name,
      label: item.path,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: child.path,
      })),
    });
  }
  return acc;
}, []);
console.log(JSON.stringify(sideVarItems));
