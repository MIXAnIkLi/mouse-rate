import { Layout } from "antd";
import HeaderLayout from "./HeaderLayout";
import SiderLayout from "./SiderLayout";
import ContentLayout from "./ContentLayout/ContentLayout";
import { useState } from "react";

export default function AppLayout() {
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

        <ContentLayout />
      </Layout>
    </Layout>
  );
}
