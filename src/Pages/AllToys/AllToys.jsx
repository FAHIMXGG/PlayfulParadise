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
    const [search, setSearch] = useState('')

    return (
        <div>
            <NavBar></NavBar>

            <div className='lg:px-16 '>
                <div className='flex justify-end md:pr-12 border-[#7E90FE]'>
                    <select className='rounded' onChange={(e) => setSearch(e.target.value)}>
                        <option value="">All</option>
                        <option value="SportsCar">Sports Car</option>
                        <option value="RegularCar">Regular Car</option>
                        <option value="Truck">Truck</option>

                    </select>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 gap-10 lg:px-28 mt-6 p-5'>
                {
                    toys.filter((item) => {
                        return search === '' ? item : item.subCategory.includes(search)
                    }).map(toy => <AllToysInfo
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