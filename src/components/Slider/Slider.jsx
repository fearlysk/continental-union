import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import routes from "../../constants/routes";
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';
import culture from '../../assets/culture.jpg';
import defence from '../../assets/defence.jpg';
import economy from '../../assets/economy.jpg';
import ecology from '../../assets/ecology.jpg';


const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px',
    border: '1px solid black'
  }

const slideImages = [
   {
    url: culture,
    caption: 'Культура',
    linkUrl: routes.CULTURE
   },
   {
    url: defence,
    caption: 'Оборона',
    linkUrl: routes.ABOUT
   },
   {
    url: economy,
    caption: 'Экономика',
    linkUrl: routes.ABOUT
   },
   {
    url: ecology,
    caption: 'Экология и природа',
    linkUrl: routes.ABOUT
   },
];

const Slider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'background': `url(${slideImage.url})` }}>
                <span className='slider__caption'><Link to={slideImage.linkUrl}>{slideImage.caption}</Link></span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slider;
