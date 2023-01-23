import { AnimationOnScroll } from 'react-animation-on-scroll';
import Politics1 from "../../assets/politics-1.jpg";
import Politics2 from "../../assets/politics-2.jpg";
import Politics3 from "../../assets/politics-3.jpg";
import './Politics.css';

const Politics = () => {
    return (
        <div className="politics__wrapper">
        <h1 className="politics__wrapper-headline">Политическая роль Континентального Союза</h1>
        <div className="politics__content">
            <div><img className="politics__content-img" src={Politics1} width={630} height={350} alt="No img found" /></div>
            <div className="politics__context-text">
              <h2>Политика Континентального Союза</h2>
              <p>Организация и создание Континентального союза должна проходить в тесном диалоге, преимущественно между СНГ, ЕАЭС и ШОС, 
                как одними из самых крупных объединений на евразийском континенте. 
                На нашем огромном континенте присутствует страна, чьё слово в современной политической повестке обладает серьёзным весом — это Китай.
                С 2001 года он активно продвигает собственные интересы в пределах ШОС. В эту организацию входит и активно растущая экономика Индии. Кроме того, партнёрами по диалогу являются не мало стран Азии, дальнего и ближнего востока,
                а так также страны Аравийского полуострова. Даже Республика Беларусь находится в шаге от вступления в состав данного объединения. 
              </p>
            </div>
        </div>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
        <div className='sep'></div>
        <div className="politics__content">
            <div><img className="politics__content-img" src={Politics2} width={570} height={350} alt="No img found" /></div>
            <div className="politics__context-text">
              <h2>Роль ШОС</h2>
              <p>Известно, что ШОС специализируется в налаживании культурных и экономических связей между. Но вопрос обеспечения безопасности
                всё ещё стоит ребром. Наблюдаются периодические стычки на китайско-индийской границе, неопределённость в Афганистане (наблюдатель ШОС де-юре) 
                после ухода американского военного контингента. Также стоит учесть противоречивую ситуацию вокруг острова Тайвань, чья экономическая деятельность
                 контролируется США, поскольку там производится
                 подавляющее большинство необходимых в современной технике процессоров. Но эти вопросы достаточно политизированы и требуют времени. </p>
            </div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='sep'></div>
        <div className="politics__content">
            <div><img className="politics__content-img" src={Politics3} width={630} height={350} alt="No img found" /></div>
            <div className="politics__context-text">
              <h2>Роль БРИКС</h2>
              <p>Немаловажным объединением является БРИКС. Оно было создано с целью 
                совместного достижения высоких экономических результатов быстро развивающимися экономиками мира.
                 В организацию входят Бразилия, Россия, Индия, Китай, ЮАР. Из них, Россия, Китай и Бразилия входят в
                  десятку стран мира по добыче и экспорту нефти. Указанный ресурс является серьёзным инструментом в мировой экономике,
                   а учитывая общий масштаб, страны способны оказывать огромное влияние на рынок нефти, нефтепродуктов, а также отрасли, 
                   зависящие от них. По мимо прочего, БРИКС нацелен противостоять давним мировым финансовым институтам, занявших организацией 
                   собственного банка развития БРИКС.
                В итоге данное объединение имеет отношение к Евразии, но также включает членов из Африки и Южной Америки. </p>
            </div>
        </div>
        </AnimationOnScroll>
    </div>
    )
}

export default Politics;