import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';

const NavBar = () => {
    return (
        <div>
            <Navbar className=' '
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://github.com/FAHIMXGG">

                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white md:ml-16  font-mono ">
                        PlaytimePalace
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 md:mr-16">



                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">

                            </span>
                            <span className="block truncate text-sm font-medium">

                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>

                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />

                    <div className='flex gap-3'>
                        <Link className='bg-orange-400 rounded-md px-3 font-semibold text-white py-1' to="/login"><button className=' py-1'>Login</button></Link>
                        <Link className='bg-orange-400 rounded-md px-3 font-semibold text-white py-1' to="/reg"><button className=' py-1'>Register</button></Link>
                    </div>


                </div>
                <Navbar.Collapse className=''>
                    <ActiveLink to="/home">Home</ActiveLink>

                    <ActiveLink to="/blog">Blog</ActiveLink>
                    <ActiveLink to="/about">About</ActiveLink>




                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;