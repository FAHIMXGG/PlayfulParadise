import React from 'react';
import { Outlet} from 'react-router-dom';
import NavBar from '../Shared/NavBar';

const HomeLayouts = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayouts;