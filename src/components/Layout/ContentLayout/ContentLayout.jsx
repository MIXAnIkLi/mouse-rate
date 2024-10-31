import "./ContentLayout.css";
import { Breadcrumb, Layout, Typography } from "antd";
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
        <Typography.Title level={3} className="name_chapter">
          Ведомость доходов и расходов{" "}
        </Typography.Title>
        {/* <div className="main_statement">
          <div className="left_column">
            <div className="Income">
              {" "}
              <Typography.Title level={4} className="name_chapter">
                Доходы{" "}
              </Typography.Title>
              <InputInfo placeholder={"Заработок"} />
              <InputInfo placeholder={"Капиталовложения, %"} />
              <InputInfo placeholder={"Девиденды"} />
              <AddedForm
                placeholder={"Недвижимость"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
              />
              <AddedForm
                placeholder={"Ваш Бизнес"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
              />
            </div>
            <div className="Expenses">
              <Typography.Title level={4} className="name_chapter">
                Расходы{" "}
              </Typography.Title>
              <InputInfo placeholder={"Налоги"} />
              <InputInfo placeholder={"Оплата ипотеки"} />
              <InputInfo placeholder={"Кредит на образование"} />
              <InputInfo placeholder={"Оплата кредита на автомобиль"} />
              <InputInfo placeholder={"Выплаты по кредитной карточке"} />
              <InputInfo placeholder={"Розничные расходы (мелкие кредиты)"} />
              <InputInfo placeholder={"Другие расходы"} />
              <InputInfo placeholder={"Расходы на детей"} />
              <InputInfo placeholder={"Оплата кредита банка"} />
            </div>
          </div>
          <div className="right_column">
            <div className="income_itog">
              <InputInfo placeholder={"Пассивный доход"} />
              <InputInfo placeholder={"Общий доход"} />
            </div>
            <div className="expenses_itog">
              <InputInfo placeholder={"Количество детей"} />
              <InputInfo placeholder={"Расходы на ребенка"} />
              <InputInfo placeholder={"Общий расход"} />
            </div>
          </div>
        </div>
        <div className="month_income">
          <InputInfo
            className="month_income_input"
            placeholder={"Ежемесячный доход"}
          />
        </div>
        <Typography.Title level={3} className="name_chapter">
          Балансовый отчет{" "}
        </Typography.Title>
        <div className="main_statement">
          <div className="left_column">
            <Typography.Title level={4} className="name_chapter">
              Активы{" "}
            </Typography.Title>
            <InputInfo placeholder={"Сбережения"} />
            <AddedForm
              three_item
              placeholder={"Акции/Фонды/Дипозиты"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Количество"}
            />
            <AddedForm
              three_item
              placeholder={"Недвижимость"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Первый взнос"}
            />
            <AddedForm
              three_item
              placeholder={"Бизнес"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Первый взнос"}
            />
          </div>
          <div className="right_column">
            <Typography.Title level={4} className="name_chapter">
              Пассивы{" "}
            </Typography.Title>
            <InputInfo placeholder={"Ипотека"} />
            <InputInfo placeholder={"Кредит на образование"} />
            <InputInfo placeholder={"Кредит на автомобиль"} />
            <InputInfo placeholder={"Долг по кредитным картам"} />
            <InputInfo placeholder={"Сумма мелких кредитов"} />
            <InputInfo placeholder={"Пассивы (бизнес)"} />
            <InputInfo placeholder={"Кредит банка"} />
          </div>
        </div> */}
        <MainForm />
      </div>
    </Content>
  );
}
