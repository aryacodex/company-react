import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Services = () => {
  return (
    <div className='services'>Services
      
<Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
<div>
   <img src="https://github.com/meabhisingh/react-techystar/blob/master/src/assets/4.jpg?raw=true" alt="items" /> 
<p className='legend'>
    Full stack
</p> 
</div>
<div>
   <img src="https://github.com/meabhisingh/react-techystar/blob/master/src/assets/3.jpg?raw=true" alt="item2" /> 
<p className='legend'>
    peer to peer support
</p> 
</div>

</Carousel>
    </div>
  )
}

export default Services;
