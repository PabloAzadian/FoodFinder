import React from 'react';
import './Business.css';



const sampleBusiness = {
    image: "https://media.istockphoto.com/id/692557700/de/foto/burger.jpg?s=612x612&w=0&k=20&c=l0dqHbMUcdHoz_CW7PkxAfpfOhXheefwJHwuHwqg20c=",
    name: "Don's Burgers",
    address: "Negro arroyo lane 213",
    city: "Albuquerque",
    state: "New Mexico",
    zipcode: 11234 ,
    category: "Burgers",
    rating: (4.5) ,
    reviewCount: 67
  
  
}
function Business() {
    return  (
        <div className='Business'>
          <div className='image-container'>
            <img src={sampleBusiness.image} alt="burger"/>
          </div>
          <h2>{sampleBusiness.name}</h2>
          <div className='Business-information'>
            <div className='Business-address'>
                <div>{sampleBusiness.address}</div>
                <div>{sampleBusiness.city}, {sampleBusiness.state}, {sampleBusiness.zipcode}</div>
            </div>
            <div className='Business-reviews'>
                <div>{sampleBusiness.category}</div>
                <div className='rating'>{sampleBusiness.rating} Stars in {sampleBusiness.reviewCount} reviews</div>
            </div>
          </div>
        </div>
  
  
  
    )
}
  
  export default Business;
  