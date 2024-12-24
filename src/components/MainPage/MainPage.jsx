import {
  CoffeeOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./MainPage.css";
import SectionAdvantage from "./SectionAdvantage/SectionAdvantage";
import CarouselMain from "./CarouselMain/CarouselMain";

export default function MainPage() {
  return (
    <div className="body">
      <div className="content">
        <div className="content__back-img"> </div>
        <div className="content__overlay"> </div>
        <div className="content__text">
          {" "}
          <h1 className="content__headline">
            «Бизнес-тренажер Денежный поток» — игра по мотивам книг Роберта
            Кийосаки (Cashflow)
          </h1>
          <p className="content_paragraph">
            Приложение создано для людей, которые жалают повысить свою
            финансовую граммотность <br /> и научиться граммотно управлять
            своими денежными средствами, чтобы вырваться из крысиных бегов,{" "}
            <br />
            достигнув своей заветной мечты
          </p>
        </div>
        <p className="content__quote">
          „Большинство людей не понимают, что в жизни важно не то, <br />
          сколько денег вы зарабатываете, а то, сколько их у вас остается.“
          <br />
          <q>Роберта Кийосаки</q>
        </p>
      </div>
      <div className="contentWithoutMain">
        <div className="about-game">
          <div className="about-game_text">
            <h1 className="about-game_headline">
              {" "}
              Что такое игра денежный поток?{" "}
            </h1>
            <p className="about-game_paragraph">
              "Денежный поток" (Cashflow) - финансовая игра, созданная в 1993
              году Робертом Киойсаки, автором книг "Богатый папа, бедный папа",
              "Квадрант денежного потока" и многих других. Основные цели игры -
              обучение управлению личными финансами и навыкам инвестирования,
              понимание образа мышления богатых людей, тренировка деловых
              качеств. Существует 2 версии оригинальной игры "Денежный поток":
              основная версия 101 и дополнение к ней - версия 202. Дополнение
              покупается отдельно и включает только набор карточек и правила,
              поэтому, вкладывается в основную игру. Чтобы получить все
              возможности оригинальной игры "Денежный поток", необходимо
              приобрести 2 отдельные коробки общей стоимостью около 18 500 рос.
              руб. В 2017 году вышла обновленная версия оригинальной игры, в
              которой немного обновлен дизайн и наличные деньги заменены
              пластиковыми картами. Кроме оригинала, на рынке есть подделки, а
              также модифицированные версии. Последние имеют свои преимущества и
              недостатки, которые надо учесть при покупке игры.
            </p>
          </div>
          <div className="about-game_video">
            {" "}
            <iframe
              src="https://www.youtube.com/embed/X14rCyTDSlc?si=2IeyuJqLY_Pf7JZe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>{" "}
          </div>
        </div>
        <div className="advantageSection">
        <SectionAdvantage
          headline="Используем игровую форму"
          paragraph="Игра является одним из лучших инструментов мотивации. Поэтому,обучаться с тренажером CashGo весело и интересно"
          source="src/components/MainPage/SectionAdvantage/DescktopGame.png"
          alternative="Фото не найдно"
          rightImg
        />
        <SectionAdvantage
          headline="Меняем пагубные привычки"
          paragraph="Занимаясь на тренажере CashGo каждый день, мы без особых усилий, вырабатываем повседневную привычку «мыслить как инвестор»"
          source="src/components/MainPage/SectionAdvantage/BadHab.png"
          alternative="Фото не найдно"
        />
        <SectionAdvantage
          headline="Развиваем вероятностное мышление"
          paragraph="Наша финансовая жизнь переполнена вероятностными ситуациями. Было замечено, что люди, играющие в карты и кости, легче справляются со сложными жизненными ситуациями"
          source="src/components/MainPage/SectionAdvantage/Strategic.png"
          alternative="Фото не найдно"
          rightImg
        />
        <SectionAdvantage
          headline="Снимаем порог когнитивных искажеий"
          paragraph="Ученые экспериментально доказали, что наше мышление подвержено когнитивным искажениям, которые мешают нам становится богаче. Занятия на тренажере CashGo снижают порог таких искажений, как «неприятие потерь» (отношение к рискам) и «эффект привязки»"
          source="src/components/MainPage/SectionAdvantage/Cognative.png"
          alternative="Фото не найдно"
        />
      </div>
        <div className="carousel-main">
          <CarouselMain />
        </div>
      </div>
      <div className="aboutus">
        <div className="aboutus__text">
          <div className="aboutus__logo">
            <CoffeeOutlined className="aboutus__icon" />
          </div>
          <p className="aboutus_paragraph">
            Данное некоммерческое веб-приложение было создано исключительно в
            развлекательных целях для более комфортной игры в настольный
            симулятор "Cash Flow". На главной странице вы можете ознакомиться со
            все основной информацией об игре, в том числе просмотреть
            выидеоролик с ее автором.
          </p>
        </div>
        <div className="aboutus__contact">
          <div className="aboutus__email">
            <h3>Email</h3>
            <a href="email:mailto:example@example.com"> xample@example.com </a>
          </div>
          <div className="aboutus__phone">
            <h3>Phone</h3>
            <a href="tel:7893616731">+7893616731</a>
          </div>
          <div className="aboutus__adress">
            <address>
              <strong>Cash Flow</strong>
              <br />
              ул. Смольная
              <br />
              г. Москва, д.3
              <br />
            </address>
          </div>
        </div>
        <ul className="aboutus_follow">
          <li>
            <YoutubeOutlined className="aboutus_logo" />
          </li>
          <li>
            <InstagramOutlined className="aboutus_logo" />
          </li>
          <li>
            <TwitterOutlined className="aboutus_logo" />
          </li>
        </ul>
        <div className="aboutus_policy">
          <span>Политика конфиденциальности</span>
          <span>Договор-оферта</span>
          <span>© 2024 Result University</span>
        </div>
      </div>
      <div className="coockie">
        Мы используем файлы «cookie», с целью персонализации сервисов и
        повышения удобства пользования веб-сайтом. «Cookie» представляют собой
        небольшие файлы, содержащие информацию о предыдущих посещениях
        веб-сайта. Если вы не хотите, чтобы ваши пользовательские данные
        обрабатывались, пожалуйста, ограничьте их использование в своём
        браузере.
      </div>
    </div>
  );
}
