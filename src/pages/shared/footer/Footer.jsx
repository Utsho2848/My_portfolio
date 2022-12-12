import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <h2 className='text-3xl font-bold'>SR</h2>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                    <a href='https://web.facebook.com/utsho.khan1221/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    <a href="https://www.linkedin.com/in/md-shohanur-rahman-b7463322a/"><IoLogoLinkedin className='h-8 w-8'></IoLogoLinkedin></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;