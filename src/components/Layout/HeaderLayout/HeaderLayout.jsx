import { Layout, theme, Button } from "antd";
import PropTypes from "prop-types";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./HeaderLayout.css";
import { useEffect } from "react";

export default function HeaderLayout({ collapsed, setCollapsed }) {
  const { Header } = Layout;
  const { token } = theme.useToken();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--colorBgContainer",
      token.colorBgContainer
    );
  }, [token]);

  return (
    <Header className="header">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="header__button"
      />
    </Header>
  );
}

HeaderLayout.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
