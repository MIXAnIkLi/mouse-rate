import { Form, Input, InputNumber, Typography } from "antd";
import "./MainForm.css";
// import PropTypes from "prop-types";
import AddedForm from "../AddedForm/AddedForm";
import { useWatch } from "antd/es/form/Form";
import { useEffect } from "react";

export default function MainForm() {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const [form] = Form.useForm();

  const earnings = useWatch("earnings", form);
  const capital_investments = useWatch("capital_investments", form);
  const dividend = useWatch("dividend", form);
  const cost_real_estate = useWatch("cost_real_estate", form);

  console.log(cost_real_estate,earnings);

  useEffect(() => {
    const totalIncome =
      parseFloat(earnings || 0) +
      parseFloat(capital_investments || 0) +
      parseFloat(dividend || 0);
    // parseFloat(cost_real_estate || 0)
    form.setFieldValue("all_income", totalIncome);
  }, [earnings, capital_investments, dividend, form]);

  return (
    <>
      <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish}>
        <Typography.Title level={3} className="name_divade_chapter">
          Ведомость доходов и расходов{" "}
        </Typography.Title>
        <div className="main_statement">
          <Typography.Title level={4} className="name_chapter">
            Доходы
          </Typography.Title>
          <div className="block">
            <div className="left_column">
              <Form.Item name="earnings" label="Зароботок:">
                <InputNumber placeholder="Заработок" />
              </Form.Item>
              <Form.Item name="capital_investments" label="Капиталовложения, %">
                <InputNumber placeholder="Капиталовложения, %" />
              </Form.Item>
              <Form.Item name="dividend" label="Девиденды">
                <InputNumber placeholder="Девиденды" />
              </Form.Item>
              <AddedForm
                name_form={"1"}
                name_main={"cost_real_estate"}
                placeholder={"Недвижимость"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
              />
              <AddedForm
                name_form={"2"}
                name_main={"cost"}
                placeholder={"Ваш бизнес"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
              />
            </div>
            <div className="right_column">
              <div className="income_itog">
                <Form.Item name="passive_income" label="Пассивный доход">
                  <InputNumber placeholder="Пассивный доход" />
                </Form.Item>
                <Form.Item name="all_income" label="Общий доход">
                  <InputNumber disabled placeholder="Общий доход" />
                </Form.Item>
              </div>
            </div>
          </div>
          <Typography.Title level={4} className="name_chapter">
            Расходы{" "}
          </Typography.Title>
          <div className="block">
            <div className="left_column">
              <Form.Item name="tallage" label="Налоги">
                <InputNumber placeholder="Налоги" />
              </Form.Item>
              <Form.Item name="mortageg_pay" label="Оплата ипотеки">
                <InputNumber placeholder="Оплата ипотеки" />
              </Form.Item>
              <Form.Item name="credit_edu" label="Кредит на образование">
                <InputNumber placeholder="Кредит на образование" />
              </Form.Item>
              <Form.Item
                name="credit_auto"
                label="Оплата кредита на автомобиль"
              >
                <InputNumber placeholder="Оплата кредита на автомобиль" />
              </Form.Item>
              <Form.Item
                name="credit_card"
                label="Выплаты по кредитной карточке"
              >
                <InputNumber placeholder="Выплаты по кредитной карточке" />
              </Form.Item>
              <Form.Item
                name="small_credits"
                label="Розничные расходы (мелкие кредиты)"
              >
                <InputNumber placeholder="Розничные расходы (мелкие кредиты)" />
              </Form.Item>
              <Form.Item name="other_expenses" label="Другие расходы">
                <InputNumber placeholder="Другие расходы" />
              </Form.Item>
              <Form.Item name="cgildren_expenses" label="Расходы на детей">
                <InputNumber placeholder="Расходы на детей" />
              </Form.Item>
              <Form.Item name="credit_bank" label="Оплата кредита банка">
                <InputNumber placeholder="Оплата кредита банка" />
              </Form.Item>
            </div>
            <div className="right_column">
              <Form.Item name="count_child" label="Количество детей">
                <InputNumber placeholder="Количество детей" />
              </Form.Item>
              <Form.Item name="child_exp" label="Расходы на ребенка">
                <InputNumber placeholder="Расходы на ребенка" />
              </Form.Item>
              <Form.Item name="all_expenses" label="Общий расход">
                <InputNumber placeholder="Общий расход" />
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
        <Typography.Title level={3} className="name_divade_chapter">
          Балансовый отчет{" "}
        </Typography.Title>
        <div className="main_statement">
          <div className="left_column">
            <Typography.Title level={4} className="name_chapter">
              Активы{" "}
            </Typography.Title>
            <Form.Item name="saving" label="Сбережения">
              <InputNumber placeholder="Сбережения" />
            </Form.Item>
            <AddedForm
              three_item
              name_form={"3"}
              name_main = {'fondes'}
              placeholder={"Акции/Фонды/Дипозиты"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Количество"}
            />
            <AddedForm
              three_item
              name_form={"4"}
              name_main = {'estate'}
              placeholder={"Недвижимость"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Первый взнос"}
            />
            <AddedForm
              name_main = {'buisnes'}
              name_form={"5"}
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
              <InputNumber placeholder="Ипотека" />
            </Form.Item>
            <Form.Item name="credit_education" label="Кредит на образование">
              <InputNumber placeholder="Кредит на образование" />
            </Form.Item>
            <Form.Item name="credit_automob" label="Кредит на автомобиль">
              <InputNumber placeholder="Кредит на автомобиль" />
            </Form.Item>
            <Form.Item name="debt_credit_card" label="Долг по кредитным картам">
              <InputNumber placeholder="Долг по кредитным картам" />
            </Form.Item>
            <Form.Item name="debt_small_credit" label="Сумма мелких кредитов">
              <InputNumber placeholder="Сумма мелких кредитов" />
            </Form.Item>
            <Form.Item name="passive_buisnes" label="Пассивы (бизнес)">
              <InputNumber placeholder="Пассивы (бизнес)" />
            </Form.Item>
            <Form.Item name="debt_credit_bank" label="Кредит банка">
              <InputNumber placeholder="Кредит банка" />
            </Form.Item>
          </div>
        </div>
      </Form>
    </>
  );
}
