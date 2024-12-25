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
import { Link } from "react-router-dom";
import { useParams,  } from 'react-router-dom';

export default function SiderLayout({ collapsed, setCollapsed }) {
  const { Sider } = Layout;
  const params = useParams();
  console.log(params)
  function getItem(label, key, icon, to, children) {
    return {
      key,
      icon,
      children,
      label: <Link to={to}>{label}</Link>,
    };
  }
  const items = [
    getItem("Главная страница", "/", <DesktopOutlined />, "/"),
    getItem("Бланк игрока", "/player-form", <FileTextOutlined />, "/player-form"),
    getItem("Правила игры", "/rules", <PieChartOutlined />, "/rules"),
    getItem("Добавить игрока", "/add-player", <BranchesOutlined />, "/add-player"),
    getItem("Игроки", "sub1", <UserOutlined />, null, [
      getItem("Миша", "/players/1", null, "/players/1"),
      getItem("Ксюша", "/players/2", null, "/players/2"),
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
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[location.pathname]}
          mode="inline"
          items={items}
          style={{ height: "100%" }}
        />
      </Sider>
    </>
  );
}

SiderLayout.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
