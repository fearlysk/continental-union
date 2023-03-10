import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import routes from "../../constants/routes";
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';
import culture from '../../assets/culture.jpg';
import politics from '../../assets/politics.jpg';
import economy from '../../assets/economy.jpg';


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
    url: politics,
    caption: 'Политика',
    linkUrl: routes.POLITICS
   },
   {
    url: economy,
    caption: 'Экономика',
    linkUrl: routes.ECONOMY
   }
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
