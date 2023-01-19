import React from 'react'
import ImageSlider from './ImageSlider'
import "./Offers.css"

const Offers = () => {
    const slides = [
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674109513_rose-hip_web_category-1.gif"},
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674029677_1298x418-4.gif"},
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674029762_face_compact_web_hp.jpg"},
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674106511_pu_webhp-1.jpg"},
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673849666_hp-top-carousel-size-1298x418-2.gif"},
      ];
      const containerStyles = {
        width: "97%",
        height: "380px",
        margin: "0 auto",
      };
  return (
    <div>
        <div className='heading'>
            <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1563364997_offers-for-you-d.jpg" alt="heading" />
        </div>
        <div className='containerStyles' style={containerStyles}>
            <ImageSlider slides={slides} />
      </div>
    </div>
  )
}

export default Offers