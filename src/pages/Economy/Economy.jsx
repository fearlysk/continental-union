import { AnimationOnScroll } from 'react-animation-on-scroll';
import Economy1 from "../../assets/economy-1.png";
import Economy2 from "../../assets/economy-2.png";
import Economy3 from "../../assets/economy-3.png";
import './Economy.css';

const Economy = () => {
    return (
        <div className="economy__wrapper">
        <h1 className="economy__wrapper-headline">Взаимодействие между членами Континентального Союза в сфере экономики</h1>
        <div className="economy__content">
            <div><img className="economy__content-img" src={Economy1} width={630} height={350} alt="No img found" /></div>
            <div className="economy__context-text">
              <h2>Евразийский экономический союз</h2>
              <p>О возможном экономическом потенциале будущего Континентального союза, на данный момент, возможно судить 
                по настоящим экономическим результатам стран и других интеграционных объединений. 
                Одним из самых крупных экономических объединений на нашем континенте является Евразийский экономический союз.
                 На приведённом графике изображены данные темпа развития торговли государств-членов за период 2016-2022 гг. 
                 в процентах к предыдущему аналогичному периоду. 
              </p>
            </div>
        </div>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
        <div className='sep'></div>
        <div className="economy__content">
            <div className="economy__context-text">
              <h2>Роль БРИКС</h2>
              <p>Немаловажным объединением является БРИКС. Оно было создано с целью совместного достижения высоких 
                экономических результатов быстро развивающимися экономиками мира. В организацию входят Бразилия, Россия, 
                Индия, Китай, ЮАР. Из них, Россия, Китай и Бразилия входят в десятку стран мира по добыче и экспорту нефти. 
                Указанный ресурс является серьёзным инструментом в мировой экономике, 
                а учитывая общий масштаб, страны способны оказывать огромное влияние на рынок нефти, нефтепродуктов, а также отрасли, зависящие от них.  </p>
            </div>
            <div><img className="economy__content-img" src={Economy2} width={570} height={350} alt="No img found" /></div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn">
        <div className='sep'></div>
        <div className="economy__content">
            <div><img className="economy__content-img" src={Economy3} width={630} height={350} alt="No img found" /></div>
            <div className="economy__context-text">
              <h2>Содружество Независимых Государств</h2>
              <p>СНГ является вторым самым крупным интеграционный объединением на 
                Евразийском континенте после Европейского союза. 
                Поэтому можно обратить внимание на результат внешней торговли государств-участников СНГ за период 2015-2019 гг. в относительных показателях.
                Динамика внешней торговли в процентном выражении в рассматриваемом периоде имела пик в 2017 г. - более 120%. Однако плоть до 2019 г. наблюдалось падения показателя, но самое важное, 
                что официальная статистика не предоставлена за период после начала пандемии, что представляет трудность в предположении ситуации на будущий год.</p>
            </div>
        </div>
        </AnimationOnScroll>
    </div>
    )
}

export default Economy;
