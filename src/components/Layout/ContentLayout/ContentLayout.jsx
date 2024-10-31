import "./ContentLayout.css";
import { Breadcrumb, Layout } from "antd";
import EditableParagraph from "../../EditableParagraph";
// import InputInfo from "../../InputInfo/InputInfo";
// import AddedForm from "../../AddedForm/AddedForm";
import MainForm from "../../MainForm/MainForm";

export default function ContentLayout() {
  const { Content } = Layout;

  return (
    <Content
      style={{
        margin: "10px 150px 10px 150px",
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>All templates</Breadcrumb.Item>
        <Breadcrumb.Item>Rat Rase</Breadcrumb.Item>
      </Breadcrumb>
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
