import "../styles/Delnpay.scss";

function Delnpay() {
  return (
    <div className="p-20 ml-30">
      <h2 className="mt-5 mb-30">Условия доставки и оплаты</h2>
      <div className="mb-30">
        <details className="term ">
          <summary className="d-flex justify-between">
            <h3 className="m-10">Условия доставки</h3>
            <img className="arrowdel" src="img/arrow1.png" alt="Arrow" />
          </summary>
          <div className="detailwrap ml-50">
            <details className="term ">
              <summary className="d-flex justify-between">
                <h3 className="m-10">Доставка для жителей г. Минска</h3>
                <img className="arrowdel" src="img/arrow1.png" alt="Arrow" />
              </summary>
              <div className="mt-10 ml-15">
                <b>Доставка Минск и в пределах 2-й МКАД:</b>
                <p>
                  <b>Время Доставки –</b> с 10.00 до 23.00 пн-сб.
                </p>
                <p>
                  <b>Срок доставки:</b> на следующий день, день в день (при наличии товара на складе), после
                  подтверждения заказа.
                </p>
                <p>В воскресенье доставка не осуществляется.</p>
                <b>Стоимость доставки:</b>
                <p>При заказе до 38 руб - 5 руб.</p>
                <p>При заказе на 38 и более руб - бесплатно.</p>
              </div>
            </details>
          </div>
          <div className="detailwrap ml-50">
            <details className="term ">
              <summary className="d-flex justify-between">
                <h3 className="m-10">Доставка по всей Беларуси</h3>
                <img className="arrowdel" src="img/arrow1.png" alt="Arrow" />
              </summary>
              <div className="mt-10 ml-15">
                <p>Доставка осуществляется курьерской службой.</p>
                <p>
                  <b>Время Доставки –</b> с 10.00 до 18.00 пн-пт.
                </p>
                <b>Срок доставки:</b>
                <p>в течение 2-5 рабочих дней с момента подтверждения заказа.</p>
                <b>Стоимость доставки:</b>
                <p>При заказе до 38 руб - 5 руб.</p>
                <p>При заказе на 38 и более руб - бесплатно.</p>
              </div>
            </details>
          </div>
        </details>
        <div className="detailwrap">
          <details className="term">
            <summary className="d-flex justify-between">
              <h3 className="m-10">Способы оплаты</h3>
              <img className="arrowdel" src="img/arrow1.png" alt="Arrow" />
            </summary>
            <ul className="del ml-15 mt-10">
              <li>
                <p>Наличный расчет</p>
              </li>
              <li>
                <p>Банковской картой курьеру</p>
              </li>
              <li>
                <p>Безналичный расчет</p>
              </li>
              <li>
                <p>
                  Банковской картой на сайте через систему <a href="https://bepaid.by/">bePaid</a> (система обслуживания
                  платежей по банковским карточкам VISA и MasterCard всех банков мира)
                </p>
                <p>
                  Платежная страница системы bePaid отвечает всем требованиям безопасности передачи данных (PCI DSS
                  Level 1).
                </p>
                <p>Все конфиденциальные данные хранятся в зашифрованном виде и максимально устойчивы к взлому.</p>
              </li>
            </ul>
          </details>
        </div>
        <div className="detailwrap">
          <details className="term">
            <summary className="d-flex justify-between">
              <h3 className="m-10">Порядок возврата товара</h3>
              <img className="arrowdel" src="img/arrow1.png" alt="Arrow" />
            </summary>
            <div className="ml-15 mt-10">
              <p>
                В соответствии со статьей 26 Закона Республики Беларусь «О защите прав потребителей», игрушки входят в
                перечень непродовольственных товаров не подлежащих обмену или возврату (*за исключением товаров в
                герметичной упаковке)
              </p>
              <p>
                По вопросам обмена или возврата товара не надлежащего качества приобретенного в нашем интернет-магазине,
                вы можете обратиться по телефонам: 8 029 113-0123; 8 029 771-0123.
              </p>
              <p>Возврат денежных средств осуществляется в том же порядке, в котором производилась его оплата:</p>
              <ul className="del ml-15">
                <li>
                  <p>
                    при оплате товара наличными, возврат денежных средств покупателю будет осуществлен так же, наличными
                    денежными средствами, непосредственно при передаче товара магазину.
                  </p>
                </li>
                <li>
                  <p>
                    при оплате товара банковской картой через терминал или по средствам электронного платежа, возврат
                    осуществляется на банковскую карту, с которой был произведен платеж, в течение 1 дня при возврате в
                    день оплаты, в течение 2х рабочих дней в других случаях.
                  </p>
                </li>
                <li>
                  <p>
                    при заказе товара по почте, возврат осуществляется по средствам наложенного платежа, после получения
                    товара магазином.
                  </p>
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className="detailwrap">
          <details className="term">
            <summary className="d-flex justify-between">
              <h3 className="m-10">Правила пользования магазином</h3>
              <img className="arrowdel" src="img/arrow1.png" alt="Arrow" />
            </summary>
            <div className="ml-15 mt-10">
              <p>Заказ Вы можете оформить через Интернет, либо по телефону.</p>
              <ul className="del ml-15">
                <li>
                  <p>
                    При заказе товара по телефону необходимо указать точное название игрушки и артикул, приведенный на
                    странице ее полного описания.
                  </p>
                </li>
                <li>
                  <p>
                    При заказе товара через интернет добавьте необходимый товар в корзину, перейдите в корзину, далее
                    выберите "Оформить заказ", введите данные для доставки, выберите способ доставки и способ оплаты.
                  </p>
                </li>
                <li>
                  <p>
                    При выборе оплаты банковской картой онлайн вы перейдете на специальную защищенную платежную страницу
                    процессинговой системы bePaid
                  </p>
                </li>
              </ul>
              <p>Удачных Вам покупок!</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Delnpay;
