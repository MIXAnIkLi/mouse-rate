import "./ContentLayout.css";
import { Breadcrumb, Layout } from "antd";
import EditableParagraph from "../../EditableParagraph";
import MainForm from "../../MainForm/MainForm";



export default function ContentLayout() {
  const { Content } = Layout;
  const items = [
    {
      title: <a href="">All templates</a>,
    },
    {
      title: <a href="">Rat Rase</a>,
    },
  ];

  return (
    <Content
      style={{
        margin: "30px 150px 90px 150px",
      }}
    >
      <Breadcrumb
        items={items}
        style={{
          margin: "16px 0",
        }}
      />
      <div
        style={{
          padding: 10,
          minHeight: 360,
          background: "#FFFF",
          width: "100%",
        }}
      >
        <div className="main_content">
          <EditableParagraph strong placeholder={"Введите профессию"} />
          <EditableParagraph placeholder={"Введите ваше имя"} />
          <EditableParagraph placeholder={"Введите имя аудитора"} />
        </div>
        <MainForm />
      </div>
    </Content>
  );
}
