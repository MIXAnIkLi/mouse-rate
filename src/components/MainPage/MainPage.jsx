import { Layout } from "antd";
import HeaderLayout from "../Layout/HeaderLayout";
import SiderLayout from "../Layout/SiderLayout";
import { useState } from "react";

export default function MainPage() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <SiderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed} />
      <h1>Hellow ROUTER</h1>

      </Layout>
    </Layout>
  );
}