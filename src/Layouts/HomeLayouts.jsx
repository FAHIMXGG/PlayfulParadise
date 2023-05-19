import React from 'react';
import ShopByCategory from '../HomePageComponents/ShopByCategory/ShopByCategory';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import Slider from '../Shared/Slider/Slider';
import RecentlyAdded from '../Shared/RecentlyAdded/RecentlyAdded';

const HomeLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <ShopByCategory></ShopByCategory>
            <RecentlyAdded></RecentlyAdded>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayouts;