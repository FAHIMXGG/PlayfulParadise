import React, { useEffect, useState } from 'react';
import AllToysInfo from './AllToysInfo/AllToysInfo';
import { Outlet } from 'react-router-dom';
import NavBar from '../../Shared/NavBar';

const AllToys = () => {
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.error(error))
    }, [])

//console.log(toys)

    return (
        <div>
            <NavBar></NavBar>
            <div className='grid lg:grid-cols-4 gap-10 lg:px-28 mt-6 p-5'>
                {
                    toys.map(toy => <AllToysInfo
                    key={toy._id}
                    toy={toy}
                    
                    ></AllToysInfo>)
                }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AllToys;