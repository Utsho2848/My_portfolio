import React from 'react';
import Button from '../../components/Button';

const Banner = () => {
    return (
        <div className='grid grid-cols-3 gap-4 text-white lg:mx-36 lg:my-36'>
            <div>
                <h2 className='text-4xl mb-2'>Shohanur Rahman</h2>
                <div className='flex gap-2 mb-8'>
                    <p><a href="https://web.facebook.com/utsho.khan1221/" target="_blank">Facebook</a></p>
                    <p>|</p>
                    <p><a href="https://www.linkedin.com/in/md-shohanur-rahman-b7463322a/" target="_blank">LinkedIn</a></p>
                </div>
                <a href="https://drive.google.com/file/d/1CZNFXZNGsnyeS6q_cyttGtT2qzHJk1zy/view" target="_blank"><Button>Download Resume</Button></a>
            </div>
            <div>
                <img className='rounded-full w-64 h-64' src="https://scontent.fdac34-1.fna.fbcdn.net/v/t1.6435-9/131076203_2679886248989577_4371664608375976227_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF9uey1lMYdxHANAQn13CfBTOy0wjEA_y5M7LTCMQD_Liv1X7c4gsoknUshwkgShYEcChyAxNoo91vtA48eg6vs&_nc_ohc=I3YPsmzflHkAX9JLGQU&tn=fzPBeS6OZ3spS7_8&_nc_ht=scontent.fdac34-1.fna&oh=00_AfCH3HGwrL8rIQlXD06VktdxLB8C41rfjOzsGoA1HJfP8g&oe=63BD9E16" alt="" />
            </div>
            <div>
                <p className='text-yellow-700 font-bold text-lg'>Introduction</p>
                <h5 className='text-xl'>Hello, I'm</h5>
                <h3 className='text-3xl'>Shohanur Rahman</h3>
                <p>I am a frontend web developer. I know React based web development. I loved to learn new technologies.</p>
            </div>
        </div>
    );
};

export default Banner;