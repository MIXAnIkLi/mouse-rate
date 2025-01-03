import { Form, InputNumber, Typography } from "antd";
import "./MainForm.css";
// import PropTypes from "prop-types";
import AddedForm from "../AddedForm/AddedForm";
import { useWatch } from "antd/es/form/Form";
import { useEffect } from "react";
import ButtonCash from "../ButtonCash";

export default function MainForm() {
  const [form] = Form.useForm();

  // Income
  const earnings = useWatch("earnings", form);
  const capital_investments = useWatch("capital_investments", form);
  const dividend = useWatch("dividend", form);
  const cost_real_estates = useWatch("cost_real_estate", form);
  const cost_buizneses = useWatch("cost_buiznes", form);
  const dividend_count =
    dividend && Array.isArray(dividend)
      ? dividend.reduce((acc, curr) => {
          return acc + (curr && curr.name_cost ? curr.name_cost : 0);
        }, 0)
      : 0;
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
  const passive_income = useWatch("passive_income", form);

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
  const all_expenses = useWatch("all_expenses", form);

  // Active
  // const saving = useWatch("saving", form);
  const fondes = useWatch("fondes", form);
  const estate_in = useWatch("estate", form);
  const buisnes = useWatch("buisnes", form);

  // Passive
  const mortageg = useWatch("mortageg", form);
  const credit_education = useWatch("credit_education", form);
  const credit_automob = useWatch("credit_automob", form);
  const debt_credit_card = useWatch("debt_credit_card", form);
  const debt_small_credit = useWatch("debt_small_credit", form);
  const debt_credit_bank = useWatch("debt_credit_bank", form);
  const passive_buisnes = useWatch("passive_buisnes", form);

  useEffect(() => {
    const totalIncome =
      parseFloat(earnings || 0) +
      parseFloat(capital_investments || 0) +
      parseFloat(cost_real_estate || 0) +
      parseFloat(cost_buiznes || 0) +
      parseFloat(dividend_count || 0);
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
    dividend_count,
    passive_buisnes,
  ]);

  useEffect(() => {
    passive_income > all_expenses && all_expenses !== 0
      ? alert("Вы победили!!!")
      : "";
  }, [passive_income, all_expenses]);

  function handleCashDay() {
    const mortageg_new =
      parseFloat(mortageg || 0) - parseFloat(mortageg_pay || 0);
    if (mortageg_new === 0) {
      form.setFieldValue("mortageg_pay", 0);
    }
    const credit_education_new =
      parseFloat(credit_education || 0) - parseFloat(credit_edu || 0);
    if (credit_education_new === 0) {
      form.setFieldValue("credit_edu", 0);
    }
    const credit_automob_new =
      parseFloat(credit_automob || 0) - parseFloat(credit_auto || 0);
    if (credit_automob_new === 0) {
      form.setFieldValue("credit_auto", 0);
    }
    const credit_card_new =
      parseFloat(debt_credit_card || 0) - parseFloat(credit_card || 0);
    if (credit_card_new === 0) {
      form.setFieldValue("credit_card", 0);
    }
    const small_credits_new =
      parseFloat(debt_small_credit || 0) - parseFloat(small_credits || 0);
    if (small_credits_new === 0) {
      form.setFieldValue("small_credits", 0);
    }
    const credit_bank_new =
      parseFloat(debt_credit_bank || 0) - parseFloat(credit_bank || 0);
    if (credit_bank_new === 0) {
      form.setFieldValue("credit_bank", 0);
    }
    form.setFieldValue("mortageg", mortageg_new);
    form.setFieldValue("credit_education", credit_education_new);
    form.setFieldValue("credit_automob", credit_automob_new);
    form.setFieldValue("debt_credit_card", credit_card_new);
    form.setFieldValue("debt_small_credit", small_credits_new);
    form.setFieldValue("debt_credit_bank", credit_bank_new);
  }

  function handleSubClickAdd(event, id_uniq) {
    form.setFieldValue("passive_buisnes", [
      ...(passive_buisnes || []),
      { id: id_uniq },
    ]);
  }

  function handleSubClickRem(removedItem) {
    if (!removedItem) {
      return;
    }
    form.setFieldValue(
      "passive_buisnes",
      passive_buisnes.filter((item) => item?.id !== removedItem?.id)
    );
  }

  const handelChangeIn = (event, item) => {
    const value_name = event.target.value;
    const currentValueCost =
      event.target.name === "name_cost" ? event.target.value : item.name_cost;
    const currentValueCount =
      event.target.name === "name_count" ? event.target.value : item.name_count;
    form.setFieldValue(
      "passive_buisnes",
      passive_buisnes && Array.isArray(passive_buisnes)
        ? passive_buisnes.map((e) =>
            item.id === e.id
              ? {
                  ...e,
                  [event.target.name === "name" ? event.target.name : 0]:
                    value_name,
                  name_cost:
                    Number(currentValueCost) && Number(currentValueCount)
                      ? Number(currentValueCost) - Number(currentValueCount)
                      : [],
                }
              : e
          )
        : undefined
    );
  };

  const handleChange = (event) => {
    console.log(event);
  };

  const hadleChangeMortageg = () => {
    console.log(1);
  };

  return (
    <>
      <Form form={form} name="dynamic_form_nest_item">
        <Typography.Title level={3} className="name_divade_chapter">
          Ведомость доходов и расходов{" "}
        </Typography.Title>
        <div className="main_statement">
          <Typography.Title level={4} className="name_chapter">
            Доходы
          </Typography.Title>
          <div className="block">
            <div className="left_column">
              <Form.Item
                name="earnings"
                label={<span className="form__item">Заработок</span>}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="capital_investments"
                label={<span className="form__item">Капиталовложения, %</span>}
              >
                <InputNumber />
              </Form.Item>
              <AddedForm
                name_main={"dividend"}
                placeholder={"Девиденды"}
                placeholder_name={"Название актива"}
                placeholder_cost={"Доходность"}
                value={dividend_count}
                onChange={handleChange}
              />
              <AddedForm
                name_main={"cost_real_estate"}
                placeholder={"Недвижимость"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
                value={cost_real_estate}
                onChange={handleChange}
              />
              <AddedForm
                name_main={"cost_buiznes"}
                placeholder={"Ваш бизнес"}
                placeholder_name={"Наименование"}
                placeholder_cost={"Доход"}
                value={cost_buizneses}
                onChange={handleChange}
              />
            </div>
            <div className="right_column">
              <div className="income_itog">
                <Form.Item
                  name="passive_income"
                  label={<span className="form__item">Пассивный доход</span>}
                >
                  <InputNumber disabled />
                </Form.Item>
                <Form.Item
                  name="all_income"
                  label={<span className="form__item">Общий доход</span>}
                >
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
              <Form.Item
                name="tallage"
                label={<span className="form__item">Налоги</span>}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="mortageg_pay"
                label={<span className="form__item">Оплата ипотеки</span>}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="credit_edu"
                label={
                  <span className="form__item">Кредит на образование</span>
                }
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="credit_auto"
                label={
                  <span className="form__item">
                    Оплата кредита на автомобиль
                  </span>
                }
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="credit_card"
                label={
                  <span className="form__item">
                    Выплаты по кредитной карточке
                  </span>
                }
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="small_credits"
                label={
                  <span className="form__item">
                    Розничные расходы (мелкие кредиты)
                  </span>
                }
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="other_expenses"
                label={<span className="form__item">Другие расходы</span>}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="cgildren_expenses"
                label={<span className="form__item">Расходы на детей</span>}
              >
                <InputNumber disabled />
              </Form.Item>
              <Form.Item
                name="credit_bank"
                label={<span className="form__item">Оплата кредита банка</span>}
              >
                <InputNumber />
              </Form.Item>
            </div>
            <div className="right_column">
              <Form.Item
                name="count_child"
                label={<span className="form__item">Количество детей</span>}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="child_exp"
                label={<span className="form__item">Расходы на ребенка</span>}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name="all_expenses"
                label={<span className="form__item">Общий расход</span>}
              >
                <InputNumber disabled />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="month_income">
          <Form.Item
            className="month_income_input"
            name="month_income"
            label={<span className="form__item">Ежемесячный доход</span>}
          >
            <InputNumber disabled />
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
            <Form.Item
              name="saving"
              label={<span className="form__item">Сбережения</span>}
            >
              <InputNumber />
            </Form.Item>
            <AddedForm
              three_item
              name_main={"fondes"}
              placeholder={"Акции/Фонды/Дипозиты"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Количество"}
              value={fondes}
              onChange={handleChange}
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
              onChange={handelChangeIn}
              value={estate_in}
            />
            <AddedForm
              name_main={"buisnes"}
              three_item
              placeholder={"Бизнес"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              placeholder_count={"Первый взнос"}
              onClickAdd={handleSubClickAdd}
              onClickRem={handleSubClickRem}
              onChange={handelChangeIn}
              value={buisnes}
            />
          </div>
          <div className="right_column">
            <Typography.Title level={4} className="name_chapter">
              Пассивы{" "}
            </Typography.Title>
            <Form.Item
              name="mortageg"
              label={<span className="form__item">Ипотека</span>}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="credit_education"
              label={<span className="form__item">Кредит на образование</span>}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="credit_automob"
              label={<span className="form__item">Кредит на автомобиль</span>}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="debt_credit_card"
              label={
                <span className="form__item">Долг по кредитным картам</span>
              }
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="debt_small_credit"
              label={<span className="form__item">Сумма мелких кредитов</span>}
            >
              <InputNumber />
            </Form.Item>
            <AddedForm
              name_main={"passive_buisnes"}
              placeholder={"Пассивы (бизнес)"}
              placeholder_name={"Наименование"}
              placeholder_cost={"Цена"}
              value={passive_buisnes}
              onChange={hadleChangeMortageg}
            />
            <Form.Item
              name="debt_credit_bank"
              label={<span className="form__item">Кредит банка</span>}
            >
              <InputNumber />
            </Form.Item>
          </div>
          <ButtonCash onClick={handleCashDay} className="button_cash" />
        </div>
      </Form>
    </>
  );
}
