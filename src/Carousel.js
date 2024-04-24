import React, { useContext} from 'react';
import { CnpjContext } from "./context/CnpjContext";
import "./Carousel.css";
import Card from "./Card.js";
import Company_Search from './imgs/logo.svg'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function Carousel () {
  const {carousel, searchResult} = useContext(CnpjContext);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  console.log(carousel.current);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="container">
      <div className="carousel" ref={carousel}> {/* ref ? */}
        {searchResult.length > 0 ? (
            <div className="item">
              {searchResult.map((empresa, index) => (
                <Card key={index} data_card={empresa}/>
              ))}
            </div>
          ) : (
            <div className='center'>
              <img alt='Company Search' className='img' src={Company_Search}/>
              <p>localize acima a primeira empresa </p>
            </div>
          )}
      </div>
      
      <div className="buttons">
        <button className="b_carousel b_left" onClick={handleLeftClick}>
          <IoIosArrowBack />
        </button>
        <button className="b_carousel b_right" onClick={handleRightClick}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  )
}

export default Carousel;