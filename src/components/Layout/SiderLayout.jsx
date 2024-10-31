import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu,  } from "antd";
import PropTypes from 'prop-types';

export default function SiderLayout({collapsed, setCollapsed}) {
  const {Sider} = Layout
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem("Правила игры", "1", <PieChartOutlined />),
    getItem("Добавить игрока", "2", <DesktopOutlined />),
    getItem("Игроки", "sub1", <UserOutlined />, [
      getItem("Миша", "3"),
      getItem("Ксюша", "4"),
    ]),
    getItem("Скачать бланк", "9", <FileOutlined />),
  ];
  

  return (

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
  );
}

SiderLayout.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};