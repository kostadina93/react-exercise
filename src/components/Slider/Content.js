import { useState, useEffect } from 'react';

import SliderImage from './Image';
import SliderNavigation from './Navigation';
import { getSliderImages } from '../../services/sliderServices';

const SliderContent = () => {
  const [ images, setImages ] = useState([]);
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);

  useEffect(() => {
    getSliderImages().then(resp => {
      setImages(resp)
    }, error => {
      console.log(`Something went wrong! ${error.message}`);
    })
  }, [])

  const handleNavigation = (index) => {
    setCurrentImageIndex(index);
  }

  return (
    <div className="SliderContent">
      {
        images.length > 0 &&
        <SliderImage data={images[currentImageIndex]} />
      }
      <SliderNavigation images={images} currentIndex={currentImageIndex} handleNavigation={handleNavigation} />
    </div>
  )
}

export default SliderContent;