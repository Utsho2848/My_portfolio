import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/banner/Banner';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../pages/shared/header/Navbar';
import MySkills from '../pages/skills/MySkills';

const Main = () => {
    return (
        <div style={{ backgroundColor: "#262626" }}>
            <Navbar></Navbar>
            <Banner></Banner>
            <MySkills></MySkills>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;