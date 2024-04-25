import styles from './Agreement.module.sass'

export default function Agreement() {

    return (
        <>
            <div className={styles.agreement}>
                <div className={styles.agreement__container}>
                    <h1>Настоящее Соглашение о подписке</h1>
                    <p>
                        Настоящее Соглашение о подписке (далее – “Соглашение”) является официальным документом администратора интернет-сайта <a href="https://chat-guru.ru">https://chat-guru.ru</a>
                        ИП Швельня Павел Станиславович, ИНН: 590848534667, ОГРН: 323595800135682, далее именуемого “Лицензиар”.
                    </p>
                    <p>
                        Безусловным акцептом настоящего Соглашения, является акцепт Лицензионного соглашения, размещённым в сети Интернет по адресу <a href="https://chat-guru.ru/agreement">https://chat-guru.ru/agreement</a>, что подтверждает факт ознакомления и согласия Лицензиата со всеми положениями Соглашения.
                    </p>
                    <p>
                        Лицензиар в любое время, по своему усмотрению, имеет право изменять условия настоящего Соглашения без уведомления Лицензиата. При этом Лицензиар, остается ответственным за исполнение принятых на себя обязательств по предыдущей редакции Соглашения в случае, если Лицензиат ранее акцептовал предыдущую редакцию Соглашения и оплатил авансом. Оплата (предоплата) Лицензиатом предоставления неисключительных прав на ПК, в соответствии с обновленной, актуальной версией Соглашения, подтверждает его полное безусловное согласие с изложенными в ней условиями.
                    </p>
                    <p>
                        Условия настоящего Соглашения действуют бессрочно с момента их опубликования в сети Интернет по адресу <a href="https://chat-guru.ru/rules">https://chat-guru.ru/rules</a>.
                    </p>
                    <p>
                        Термины, используемые в настоящем Соглашении, трактуются в соответствии с терминами, определёнными в Лицензионном соглашении (далее- Лицензионное соглашение), размещённым в сети Интернет по адресу <a href="https://chat-guru.ru/agreement">https://chat-guru.ru/agreement</a>.
                    </p>
                    <h2>ОБЩИЕ ПОЛОЖЕНИЯ</h2>
                    <p>
                        Размер роялти за неисключительную лицензию на ПК, определяется в соответствии с Тарифом, действующим на момент оплаты Подписки. При первичной оплате за доступ к сервису, Лицензиат подключается одновременно к двум тарифным планам.
                    </p>
                    <table className='table__container'>
                        <caption>Тарифы, действующие с 25 марта 2024 года:</caption>
                        <thead>
                            <tr>
                                <th>Наименование Тарифа &#8470;&nbsp;1</th>
                                <th>Описание Тарифа</th>
                                <th>Количество дней действия Тарифа</th>
                                <th>Стоимость Подписки (руб.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={4} >Нейросети</td>
                                <td rowSpan={4} >Доступ к сервису “ChatGuru”</td>
                                <td>1</td>
                                <td>799</td>
                            </tr>
                            <tr>
                                {/* <td></td>
                                <td></td> */}
                                <td>2</td>
                                <td>490</td>
                            </tr>
                            <tr>
                                {/* <td></td>
                                <td></td> */}
                                <td>3</td>
                                <td>290</td>
                            </tr>
                            <tr>
                                {/* <td></td>
                                <td></td> */}
                                <td>4</td>
                                <td>200</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        1.3 При отсутствии возможности оплаты Тарифа “Сервис ChatGuru”, Лицензиар имеет право предоставить доступ к Подписке по системе скидок, исходя из следующей стоимости:
                        490;
                        290
                        200
                        Данные суммы будут списываться с интервалом 24ч с банковской карты Лицензиата, в том случае если 790 руб. не удалось списать в день оплаты подписки. Как только будет списана одна из сумм, доступ к сервису откроется на 7 дней в соответствии с действием Тарифа.
                    </p>
                    <p>
                        При первичном оформлении Подписки на Тариф “Нейросети” действует пробный период на 5 (пять) дней стоимостью 1 рубль. По истечении пробного периода оплата производится согласно стоимости Тарифа.
                    </p>
                    <p>
                        При оформлении Подписки на Тариф “Сервис ChatGuru”, Лицензиар предоставляет Лицензиату доступ на безвозмездной основе в течении 5 (пяти) дней. По истечении пробного периода оплата производится согласно стоимости Тарифа. Если достаточной суммы не хватает, начинает действовать система скидок, согласно пункту 2.3 Лицензионного соглашения.
                    </p>
                    <p>
                        Тарифы по настоящему Соглашению указаны исходя из доступного Лицензиату после оплаты функционала ПК и периода, на который предоставляется неисключительная лицензия.
                    </p>
                    <p>
                        Заключением настоящего Соглашения, Лицензиат признает, что осведомлен о том, что Подписка является формой оплаты, которая может осуществляться, посредством рекуррентных списаний денежных средств (периодические безакцептные платежи), с платежной карты Лицензиата. Списания денежных средств осуществляются в соответствии с выбранным Лицензиатом Тарифом без дополнительного акцепта. При этом Лицензиар не обязан направлять Лицензиату уведомление о предстоящем списании денежных средств на следующий период. Лицензиат имеет право в любой момент отказаться от автоматического списания средств в личном кабинете на сайте.
                    </p>
                    <p>
                        Все расчеты по Соглашению осуществляются любым из доступных для этого способов, конечной единицей денежных расчетов является российский рубль. Датой оплаты считается дата поступления денежных средств на расчетный счет Лицензиара.
                    </p>
                    <p>
                        Цена Подписки не изменятся в течение всего оплаченного периода.
                    </p>
                    <p>
                        Цена Подписки и Тарифы на новый (ранее неоплаченный) период, могут быть изменены Лицензиаром.
                    </p>
                    <p>
                        Лицензиар по своему усмотрению вправе в одностороннем порядке предоставить Лицензиату скидку на Подписку в размере до 90 % от цены того или иного Тарифа. Размер и срок предоставления скидки определяется в индивидуальном порядке.
                    </p>
                    <p>
                        В случае увеличения цены Подписки, Лицензиар обязан проинформировать Лицензиата.
                    </p>
                    <p>
                        1.13 Оплата Подписки может осуществляться любым способом доступным на веб-сайте Лицензиара. Непосредственное списание средств Лицензиата осуществляют уполномоченные организации финансового рынка. Лицензиат понимает и признает, что оплата может быть инициирована только им самим, посредством совершения определенных конклюдентных действий, при этом дополнительная авторизация, а также иное подтверждение списания денежных средств, могут быть не востребованы.
                    </p>
                    <p>
                        Лицензиар оставляет за собой право проведения различных стимулирующих мероприятий, которые могут влиять на стоимость Подписки по тому или иному Тарифу, а также на продолжительность действия неисключительных прав на ПК. Такие акции могут проводится, в том числе, посредством выдачи промокодов (уникальных кодов для получения скидки по тому или иному Тарифу). При этом, сами Тарифы не изменяются. Скидки, полученные Лицензиатом во время проведения таких стимулирующих мероприятий, могут быть учтены при оплате Подписки, а также в случае возврата средств за оплаченный период.
                    </p>
                    <p>
                        Скидки на Тарифы, предусмотренные на время проведения стимулирующих мероприятий, предоставляются единовременно для Лицензиатов, впервые оплачивающих Подписку, и имеют ограниченный срок действия. По истечению оплаченного периода Подписки по Тарифу, на который была предоставлена скидка, Подписка Лицензиата продлевается на общих основаниях по стоимости того или иного Тарифа, выбранного Лицензиатом, согласно тарифной сетке Лицензиара.
                    </p>

                    <h2>Политика возвратов</h2>
                    <p>
                        По общему правилу, возврат роялти за использование ПК не предусмотрен, тем не менее, Лицензиар оставляет за собой право рассматривать обращения, связанные с возвратом средств, оплаченных за Подписку, в индивидуальном порядке.
                    </p>
                    <p>
                        При доказанных фактах мошеннических действий со стороны Лицензиата, либо при нарушении Лицензиатом пп. 3.1.1-3.1.4. настоящего Соглашения, возврат средств, оплаченных за Тарифы, не производится.
                    </p>
                    <p>
                        Возврат средств возможен, только если с момента платежа, до момента обращения Лицензиата за возвратом прошло не более 180 (ста восьмидесяти) дней.
                    </p>
                    <p>
                        Полный возврат возможен в случаях:
                    </p>
                    <ul>
                        <li>не предоставления доступа к ПК Лицензиату в течение 24 (двадцати четырех) часов с момента оплаты Подписки по соответствующему Тарифу, либо был заблокирован для Лицензиата без нарушения им своих обязательств по настоящему Соглашению на соответствующий временной отрезок в текущем, оплаченном тарифном периоде;</li>
                        <li>произведения ошибочной оплаты, то есть, если Подписка по одному и тому же Тарифу была оплачена Лицензиатом с интервалом не более 10 минут между платежами, и, если при этом Лицензиат обратился к Лицензиару с заявлением о возврате денежных средств в период, не превышающий 48 (сорока восьми) часов с момента второго платежа.</li>
                    </ul>
                    <p>
                        Частичный возврат возможен в случаях:
                    </p>
                    <ul>
                        <li>если Лицензиат по ошибке оплатил стоимость Тарифа, который предполагает более длительный доступ к ПК, при этом возврат производится в сумме пропорциональной ценовой разнице между Тарифами, в этом случае Лицензиат должен обратится с заявлением о возврате в срок, не превышающий 24 (двадцати четырех) часов с момента оплаты Подписки;</li>
                        <li>если ПК не был доступен к использованию Лицензиатом по вине, либо по причине бездействия Лицензиара на срок более 3 (трех) часов подряд, при этом возврат производится в сумме пропорциональной времени отсутствия доступа к ПК от суммы оплаченного Лицензиатом Тарифа.</li>
                    </ul>
                    <p>
                        Возвраты производятся только при непосредственном обращении Лицензиата к Лицензиару с соответствующим заявлением. При обращении за возвратом к поставщикам платежных услуг Лицензиар возврат средств не производит, во избежание двойного возмещения.
                    </p>
                    <h2>Отказ от подписки</h2>
                    <p>
                        Лицензиат, в любое время, имеет право отказаться от Подписки, при этом стоимость оплаченного, но не использованного периода действия неисключительных прав на ПК, Лицензиату не возвращается.
                    </p>
                    <p>
                        Отказ от Подписки возможен не ранее чем через 24 часа с момента первичной активации Подписки по тому или иному Тарифу. В рамках программы Лояльности, Лицензиар вправе по своему усмотрению уменьшить указанный период на Тариф, оформленный с Триал-доступом.
                    </p>
                    <p>
                        Лицензиар имеет право отказаться от предоставления прав на ПК, без предварительного предупреждения Лицензиата, в случае нарушения Лицензиатом условий Лицензионного Соглашения.
                    </p>
                    <p>
                        Отказ от Подписки осуществляется на <a href="https://chat-guru.ru">https://chat-guru.ru</a> во вкладке «Профиль», либо путем обращения в Службу поддержки.
                    </p>
                    <p>
                        Контакты поддержки: <a href="mailto:help@chat-guru.ru">help@chat-guru.ru</a>
                    </p>
                </div>
            </div>
        </>
    )
}