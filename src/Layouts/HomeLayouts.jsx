import React from 'react';
import ShopByCategory from '../HomePageComponents/ShopByCategory/ShopByCategory';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';

const HomeLayouts = () => {
    return (
        <div>
            <NavBar></NavBar>
            <ShopByCategory></ShopByCategory>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayouts;