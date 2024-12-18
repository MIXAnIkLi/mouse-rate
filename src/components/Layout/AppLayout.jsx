import { Layout } from "antd";
import HeaderLayout from "./HeaderLayout/HeaderLayout";
import SiderLayout from "./SiderLayout";
import { useState } from "react";
import { Outlet } from "react-router-dom";


export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
    <Layout
      style={{
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <SiderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed} />

        <Outlet />
      </Layout>
    </Layout>
    
    </>
  );
}
