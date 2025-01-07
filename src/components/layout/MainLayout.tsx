import { Layout, Menu, MenuProps } from "antd";
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import { createElement } from "react";
const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
  // UserOutlined,
  {
    key: "1",
    label: "dashboard",
  },
  {
    key: "2",
    label: "profile",
  },
  {
    key: "3",
    label: "user",
    children: [
      {
        key: "11",
        label: "dashboard",
      },
      {
        key: "21",
        label: "profile",
      },
    ],
  },
];
//
// .map((icon, index) => ({
//   key: String(index + 1),
//   icon: createElement(icon),
//   label: `nav ${index + 1}`,
// }));
//
const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
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
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            so the main content should be here
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
