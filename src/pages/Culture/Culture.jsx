import { AnimationOnScroll } from 'react-animation-on-scroll';
import Culture1 from "../../assets/culture-1.jpg";
import Culture2 from "../../assets/culture-2.jpg";
import Culture3 from "../../assets/culture-3.jpg";
import Culture4 from "../../assets/culture-4.jpg";
import "./Culture.css";

const Culture = () => {
    return (
        <div className="culture__wrapper">
            <h1 className="culture__wrapper-headline">Культурное взаимодействие между членами Континентального Союза</h1>
            <div className="culture__content">
                <div><img className="culture__content-img" src={Culture1} width={430} height={350} alt="No img found" /></div>
                <div className="culture__context-text">
                  <h2>Культурное взаимодействие</h2>
                  <p>Культурный обмен между народами является неотъемлемым и крайне важным атрибутом развития человеческого общества. 
                  Ценность и необходимость обмена культурным опытом между странами доказана давно и безоговорочно. 
                  По сути, такой «диалог» является залогом нормального существования и постоянного развития любого государства, 
                  особенно в нашем современном интернациональном обществе.</p>
                </div>
            </div>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div className="culture__content">
                <div className="culture__context-text">
                  <h2>Индивидуальность культур</h2>
                  <p>Континентальный союз – это многонациональная, многокультурная и многоконфессиональная организация, 
                    которая поможет не только укрепить связи между государствами, но и развивать их во всех отношениях. 
                    Страны-основатели данной организации бесспорно имеют самые разные культуры, разную историю её развития
                     и т.д. И, несомненно, каждая из стран старается сохранить эту индивидуальность. И наша организация обязательно будет этому способствовать. 
                     Возможно открытие в странах центров, где люди смогут познакомиться и ощутить 
                     культуру других стран-участниц союза благодаря картинам, национальным нарядам, книгам и т.п.</p>
                </div>
                <div><img className="culture__content-img" src={Culture2} width={430} height={350} alt="No img found" /></div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn">
            <div className="culture__content">
                <div><img className="culture__content-img" src={Culture3} width={430} height={350} alt="No img found" /></div>
                <div className="culture__context-text">
                  <h2>Безвизовый режим</h2>
                  <p>Не менее важной частью, как нам кажется, является наличие безвизового режима для граждан стран-участниц Континентального союза. 
                    Более свободный въезд в страны позволит значительно увеличить поток туристов, а это приведет к повышению интереса к стране и, 
                    конечно, положительно отразится на экономике. Помимо этого, увеличение потока туристов поспособствует развитию инфраструктуры в стране, 
                    так как является хорошим стимулом и средством для инвестиций. 
                    И не мало важно то, что повышается количество международных связей в малом и среднем бизнесе.</p>
                </div>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
            <div className="culture__content">
                <div className="culture__context-text">
                  <h2>Образование</h2>
                  <p>Конечно стоит упомянуть и образование. Континентальный союз будет нацелен на сближение университетов стран. 
                    В первую очередь это будет создание единых образовательных стандартов.
                     Это поможет студентам, выпускникам и сотрудникам передвигаться между странами и университетами. 
                     Так они смогут передавать знания, получать новый опыт, преподавать и проводить исследования. 
                     Также это позволит большему количеству студентов поехать в другую страну для учебы по обмену.
                     А после окончания ВУЗа он сможет получить работу по диплому в любой другой стране.</p>
                </div>
                <div><img className="culture__content-img" src={Culture4} width={430} height={350} alt="No img found" /></div>
            </div>
            </AnimationOnScroll>
        </div>
    )
}

export default Culture;
