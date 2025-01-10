import { Layout, Menu } from "antd";
import { sideBarItesGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/adminRoutesPaths";
import { facultyPaths } from "../../routes/facultyRoutesPaths";
import { studentPaths } from "../../routes/studentRoutesPaths";

const { Sider } = Layout;
const SideBar = () => {
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };

  const role = "faculty";
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sideBarItesGenerator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      sidebarItems = sideBarItesGenerator(facultyPaths, "faculty");
      break;
    case userRole.STUDENT:
      sidebarItems = sideBarItesGenerator(studentPaths, "student");
      // Expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
  }

  return (
    <div>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div
          style={{
            color: "white",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "25px",
            height: "4rem",
          }}
        >
          PH-University
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
    </div>
  );
};

export default SideBar;
