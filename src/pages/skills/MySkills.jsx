import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const MySkills = () => {
    return (
        <div className='mx-24 lg:mx-24 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-4'>
            <div>
                <h2 className='text-2xl font-bold'>My Skills:</h2>
                <div className='divider'></div>
                <div className='flex gap-4 font-semibold mt-4'>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT JS</li>
                        <li>NODE JS</li>
                    </ul>
                    <div className='divider divider-horizontal'></div>
                    <ul>
                        <li>MONGODB</li>
                        <li>EXPRESS JS</li>
                        <li>FIREBASE</li>
                        <li>STRIPE</li>
                    </ul>
                </div>
            </div>
            <Carousel>
                <div className='lg:h-56 h-48'>
                    <img className='lg:w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk64SzG5I7cECxQMHomU2zPMd-6oqSrHNKlNDNBAtiS4f5bpmnsFXxdmRX8LWTyN4Yt8g&usqp=CAU" />
                    <p className="legend">HTML5</p>
                </div>
                <div className='lg:h-56 h-48'>
                    <img className='lg:w-full' src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg" />
                    <p className="legend">CSS3</p>
                </div>
                <div className='lg:h-56 h-48'>
                    <img className='lg:w-full' src="https://www.educative.io/v2api/editorpage/5330288608542720/image/6288755792019456" />
                    <p className="legend">Javascript</p>
                </div>
                <div className='lg:h-56 h-48'>
                    <img className='lg:w-full' src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png" />
                    <p className="legend">React JS</p>
                </div>
                <div className='lg:h-56 h-48'>
                    <img className='lg:w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9WrdC46xULvIRCrlZ0y-mqV3F4a_IJRmuWbEw7f4TmN3zwaNxt45Z8TDB9Eczj0uDPNo&usqp=CAU" />
                    <p className="legend">Node JS</p>
                </div>
                <div className='lg:h-56 h-48'>
                    <img className='lg:w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0tqDrsrjp3-y6V6t-QqkP2YNQQPoU-EVtIgm0cqXuvFRUo_E1jiv-8FSwfVYpsok018&usqp=CAU" />
                    <p className="legend">MongoDb</p>
                </div>
                <div className='lg:h-56 h-48'>
                    <img className='lg:w-full' src="https://miro.medium.com/max/805/0*m1VOQP0FtcQufLgw.png" />
                    <p className="legend">Express JS</p>
                </div>
                <div className='lg:h-56 h-48'>
                    <img className='lg:w-full' src="https://blog.openreplay.com/images/authentication-in-react-18-using-firebase-v9/images/hero.png" />
                    <p className="legend">Firebase</p>
                </div>
                <div className='lg:h-56 h-48'>
                    <img className='lg:w-full' src="https://invoice2go.imgix.net/2021/08/How-does-Stripe-work.png" />
                    <p className="legend">Stripe</p>
                </div>
            </Carousel>
        </div>
    );
};

export default MySkills;
