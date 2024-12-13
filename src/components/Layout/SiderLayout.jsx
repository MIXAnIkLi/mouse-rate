import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  BranchesOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

export default function SiderLayout({ collapsed, setCollapsed }) {
  const { Sider } = Layout;
  function getItem(label, key, icon, to, children) {
    return {
      key,
      icon,
      children,
      label: <Link to={to}>{label}</Link>,
    };
  }
  const items = [
    getItem("Главная страница", "1", <DesktopOutlined />, "/"),
    getItem("Бланк игрока", "2", <FileTextOutlined />, "/player-form"),
    getItem("Правила игры", "3", <PieChartOutlined />, "/rules"),
    getItem("Добавить игрока", "4", <BranchesOutlined />, "/add-player"),
    getItem("Игроки", "sub1", <UserOutlined />, null, [
      getItem("Миша", "5", null, "/players/1"),
      getItem("Ксюша", "6", null, "/players/2"),
    ]),
    getItem("Скачать бланк", "9", <FileOutlined />, "/download-form"),
  ];

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Outlet />
    </>
  );
}

SiderLayout.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
