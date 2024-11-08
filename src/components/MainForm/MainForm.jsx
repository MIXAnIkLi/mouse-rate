import { Form, InputNumber, Typography } from "antd";
import "./MainForm.css";
// import PropTypes from "prop-types";
import AddedForm from "../AddedForm/AddedForm";
import { useWatch } from "antd/es/form/Form";
import { useEffect } from "react";
import ButtonCash from "../ButtonCash";

export default function MainForm() {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  // Income
  const earnings = useWatch("earnings", form);
  const capital_investments = useWatch("capital_investments", form);
  const dividend = useWatch("dividend", form);
  const cost_real_estates = useWatch("cost_real_estate", form);
  const cost_buizneses = useWatch("cost_buiznes", form);
  const cost_real_estate =
    cost_real_estates && Array.isArray(cost_real_estates)
      ? cost_real_estates.reduce((acc, curr) => {
          return acc + (curr && curr.name_cost ? curr.name_cost : 0);
        }, 0)
      : 0;
  const cost_buiznes =
    cost_buizneses && Array.isArray(cost_buizneses)
      ? cost_buizneses.reduce((acc, curr) => {
          return acc + (curr && curr.name_cost ? curr.name_cost : 0);
        }, 0)
      : 0;
  // Chapter
  const tallage = useWatch("tallage", form);
  const mortageg_pay = useWatch("mortageg_pay", form);
  const credit_edu = useWatch("credit_edu", form);
  const credit_auto = useWatch("credit_auto", form);
  const credit_card = useWatch("credit_card", form);
  const small_credits = useWatch("small_credits", form);
  const other_expenses = useWatch("other_expenses", form);
  const cgildren_expenses = useWatch("cgildren_expenses", form);
  const credit_bank = useWatch("credit_bank", form);
  const count_child = useWatch("count_child", form);
  const child_exp = useWatch("child_exp", form);
  // Passive
  const mortageg = useWatch("mortageg", form);
  const credit_education = useWatch("credit_education", form);
  const credit_automob = useWatch("credit_automob", form);
  const debt_credit_card = useWatch("debt_credit_card", form);
  const debt_small_credit = useWatch("debt_small_credit", form);
  const debt_credit_bank = useWatch("debt_credit_bank", form);
  const passive_buisnes = useWatch("passive_buisnes", form);
  const estate_in = useWatch("estate", form);

  useEffect(() => {
    const totalIncome =
      parseFloat(earnings || 0) +
      parseFloat(capital_investments || 0) +
      parseFloat(dividend || 0) +
      parseFloat(cost_real_estate || 0) +
      parseFloat(cost_buiznes || 0);
    form.setFieldValue("all_income", totalIncome);
    const passive_income = totalIncome - parseFloat(earnings || 0);
    form.setFieldValue("passive_income", passive_income);
    const cgildren_expenses_all =
      parseFloat(count_child || 0) * parseFloat(child_exp || 0);
    form.setFieldValue("cgildren_expenses", cgildren_expenses_all);
    const all_expenses =
      parseFloat(tallage || 0) +
      parseFloat(mortageg_pay || 0) +
      parseFloat(credit_edu || 0) +
      parseFloat(credit_auto || 0) +
      parseFloat(credit_card || 0) +
      parseFloat(small_credits || 0) +
      parseFloat(other_expenses || 0) +
      parseFloat(cgildren_expenses || 0) +
      parseFloat(credit_bank || 0);
    form.setFieldValue("all_expenses", all_expenses);
    const month_income = totalIncome - all_expenses;
    form.setFieldValue("month_income", month_income);
  }, [
    earnings,
    capital_investments,
    dividend,
    cost_real_estate,
    cost_buiznes,
    form,
    tallage,
    mortageg_pay,
    credit_edu,
    credit_auto,
    credit_card,
    small_credits,
    other_expenses,
    cgildren_expenses,
    credit_bank,
    count_child,
    child_exp,
  ]);

  function handleCashDay() {
    const mortageg_new =
      parseFloat(mortageg || 0) - parseFloat(mortageg_pay || 0);
    const credit_education_new =
      parseFloat(credit_education || 0) - parseFloat(credit_edu || 0);
    const credit_automob_new =
      parseFloat(credit_automob || 0) - parseFloat(credit_auto || 0);
    const credit_card_new =
      parseFloat(debt_credit_card || 0) - parseFloat(credit_card || 0);
    const small_credits_new =
      parseFloat(debt_small_credit || 0) - parseFloat(small_credits || 0);
    const credit_bank_new =
      parseFloat(debt_credit_bank || 0) - parseFloat(credit_bank || 0);
    form.setFieldValue("mortageg", mortageg_new);
    form.setFieldValue("credit_education", credit_education_new);
    form.setFieldValue("credit_automob", credit_automob_new);
    form.setFieldValue("debt_credit_card", credit_card_new);
    form.setFieldValue("debt_small_credit", small_credits_new);
    form.setFieldValue("debt_credit_bank", credit_bank_new);
  }

  function handleSubClickAdd() {
    form.setFieldValue("passive_buisnes", [...(passive_buisnes || []), {}]);
    // console.log(estate_in.map((e) => e.name_cost))
  }

  function handleSubClickRem(removedItem) {
    console.log(removedItem)
    if (!removedItem) {
      return;
    }
    form.setFieldValue(
      "passive_buisnes",
      passive_buisnes.filter((item) => ((item?.name !== removedItem?.name) && (item?.name_cost !== removedItem?.name_cost)))
    );
  }

  const setIn = () => {
    // form.setFieldValue("passive_buisnes", value);
  };

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
                name_main={"cost_real_estate"}
                placeholder={"Недвижимость"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
                value={cost_real_estate}
              />
              <AddedForm
                name_main={"cost_buiznes"}
                placeholder={"Ваш бизнес"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
                value={cost_buizneses}
              />
            </div>
            <div className="right_column">
              <div className="income_itog">
                <Form.Item name="passive_income" label="Пассивный доход">
                  <InputNumber disabled placeholder="Пассивный доход" />
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
                <InputNumber disabled placeholder="Расходы на детей" />
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
                <InputNumber disabled placeholder="Общий расход" />
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
            <InputNumber disabled placeholder="Ежемесячный доход" />
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
              name_main={"fondes"}
              placeholder={"Акции/Фонды/Дипозиты"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Количество"}
              // value={fondes}
            />
            <AddedForm
              three_item
              name_main={"estate"}
              placeholder={"Недвижимость"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Первый взнос"}
              onClickAdd={handleSubClickAdd}
              onClickRem={handleSubClickRem}
              // onChange={(e) => setIn(e.target.value)}
              value={estate_in}
            />
            <AddedForm
              name_main={"buisnes"}
              three_item
              placeholder={"Бизнес"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Первый взнос"}
              // value={buisnes}
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
            <AddedForm
              name_main={"passive_buisnes"}
              placeholder={"Пассивы (бизнес)"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              value={passive_buisnes}
            />
            <Form.Item name="debt_credit_bank" label="Кредит банка">
              <InputNumber placeholder="Кредит банка" />
            </Form.Item>
          </div>
          <ButtonCash onClick={handleCashDay} className="button_cash" />
        </div>
      </Form>
    </>
  );
}
