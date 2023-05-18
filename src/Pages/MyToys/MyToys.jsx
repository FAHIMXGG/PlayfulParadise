import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import UserToys from './UserToys';
import Swal from 'sweetalert2'

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);


    const url = `http://localhost:5000/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Toys Deleted successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }

    console.log(toys)
    return (
        <div>

            <div className='mx-32 mb-5 mt-10 flex justify-end'>
                <Link to="/addNew"><button className='bg-[#75E6DA] font-semibold px-3 py-2 rounded-lg'>Add New</button></Link>
            </div>
            <div>
                {
                    toys.map(toy => <UserToys
                        key={toy._id}
                        toy={toy}
                        handleDelete={handleDelete}

                    ></UserToys>)
                }
            </div>
        </div>
    );
};

export default MyToys;