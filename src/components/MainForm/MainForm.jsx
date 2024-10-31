import { Form, Input, Typography } from "antd";
import "./MainForm.css";
import PropTypes from "prop-types";
import AddedForm from "../AddedForm/AddedForm";

export default function MainForm() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const [form] = Form.useForm();
  return (
    <>
      <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish}>
        <div className="main_statement">
          <div className="block">
            <div className="left_column">
              <Typography.Title level={4} className="name_chapter">
                Доходы
              </Typography.Title>
              <Form.Item name="earnings" label="Зароботок:">
                <Input placeholder="Заработок" />
              </Form.Item>
              <Form.Item name="capital_investments" label="Капиталовложения, %">
                <Input placeholder="Капиталовложения, %" />
              </Form.Item>
              <Form.Item name="dividend" label="Девиденды">
                <Input placeholder="Девиденды" />
              </Form.Item>
              <AddedForm
                placeholder={"Недвижимость"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
              />
              <AddedForm
                placeholder={"Ваш бизнес"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
              />
            </div>
            <div className="right_column">
              <div className="income_itog">
                <Form.Item name="passive_income" label="Пассивный доход">
                  <Input placeholder="Пассивный доход" />
                </Form.Item>
                <Form.Item name="all_income" label="Общий доход">
                  <Input placeholder="Общий доход" />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="left_column">
              <Typography.Title level={4} className="name_chapter">
                Расходы{" "}
              </Typography.Title>
              <Form.Item name="tallage" label="Налоги">
                <Input placeholder="Налоги" />
              </Form.Item>
              <Form.Item name="mortageg_pay" label="Оплата ипотеки">
                <Input placeholder="Оплата ипотеки" />
              </Form.Item>
              <Form.Item name="credit_edu" label="Кредит на образование">
                <Input placeholder="Кредит на образование" />
              </Form.Item>
              <Form.Item
                name="credit_auto"
                label="Оплата кредита на автомобиль"
              >
                <Input placeholder="Оплата кредита на автомобиль" />
              </Form.Item>
              <Form.Item
                name="credit_card"
                label="Выплаты по кредитной карточке"
              >
                <Input placeholder="Выплаты по кредитной карточке" />
              </Form.Item>
              <Form.Item
                name="small_credits"
                label="Розничные расходы (мелкие кредиты)"
              >
                <Input placeholder="Розничные расходы (мелкие кредиты)" />
              </Form.Item>
              <Form.Item name="other_expenses" label="Другие расходы">
                <Input placeholder="Другие расходы" />
              </Form.Item>
              <Form.Item name="cgildren_expenses" label="Расходы на детей">
                <Input placeholder="Расходы на детей" />
              </Form.Item>
              <Form.Item name="credit_bank" label="Оплата кредита банка">
                <Input placeholder="Оплата кредита банка" />
              </Form.Item>
            </div>
            <div className="right_column">
              <Form.Item name="count_child" label="Количество детей">
                <Input placeholder="Количество детей" />
              </Form.Item>
              <Form.Item name="child_exp" label="Расходы на ребенка">
                <Input placeholder="Расходы на ребенка" />
              </Form.Item>
              <Form.Item name="all_expenses" label="Общий расход">
                <Input placeholder="Общий расход" />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="month_income">
          <Form.Item
            className="month_income_input"
            name="month_income"
            label="Ежемесячный доход"
          >
            <Input placeholder="Ежемесячный доход" />
          </Form.Item>
        </div>
        <Typography.Title level={3} className="name_chapter">
          Балансовый отчет{" "}
        </Typography.Title>
        <div className="main_statement">
          <div className="left_column">
            <Typography.Title level={4} className="name_chapter">
              Активы{" "}
            </Typography.Title>
            <Form.Item name="saving" label="Сбережения">
              <Input placeholder="Сбережения" />
            </Form.Item>
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
            <Form.Item name="mortageg" label="Ипотека">
              <Input placeholder="Ипотека" />
            </Form.Item>
            <Form.Item name="credit_education" label="Кредит на образование">
              <Input placeholder="Кредит на образование" />
            </Form.Item>
            <Form.Item name="credit_automob" label="Кредит на автомобиль">
              <Input placeholder="Кредит на автомобиль" />
            </Form.Item>
            <Form.Item name="debt_credit_card" label="Долг по кредитным картам">
              <Input placeholder="Долг по кредитным картам" />
            </Form.Item>
            <Form.Item name="debt_small_credit" label="Сумма мелких кредитов">
              <Input placeholder="Сумма мелких кредитов" />
            </Form.Item>
            <Form.Item name="passive_buisnes" label="Пассивы (бизнес)">
              <Input placeholder="Пассивы (бизнес)" />
            </Form.Item>
            <Form.Item name="debt_credit_bank" label="Кредит банка">
              <Input placeholder="Кредит банка" />
            </Form.Item>
          </div>
        </div>
      </Form>
    </>
  );
}

MainForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  placeholder_name: PropTypes.string.isRequired,
  placeholder_cost: PropTypes.string.isRequired,
  three_item: PropTypes.bool.isRequired,
  placeholder_count: PropTypes.bool.isRequired,
};
