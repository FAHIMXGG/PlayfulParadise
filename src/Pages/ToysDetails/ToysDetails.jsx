import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../Hook/UseTitle';

const ToysDetails = () => {
    useTitle('PlayfulParadise | Toys Details')
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ToysDetails;