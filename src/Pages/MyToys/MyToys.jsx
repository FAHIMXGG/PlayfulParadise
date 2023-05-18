import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import UserToys from './UserToys';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [toys, setToys] = useState([]);


    const url = `http://localhost:5000/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);

    console.log(toys)
    return (
        <div>
            <h1>gg</h1>
            <Link to="/addNew">Add New</Link>
            <div>
                {
                    toys.map(toy => <UserToys
                        key={toy._id}
                        toy={toy}

                    ></UserToys>)
                }
            </div>
        </div>
    );
};

export default MyToys;