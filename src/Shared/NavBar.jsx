import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className=' '>
            <Navbar className=' '
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://github.com/FAHIMXGG">

                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white md:ml-16  font-mono text-[#05445E]">
                        PlayfulParadise
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 md:mr-16">


                    {user ? <>
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={user.photoURL ? <Avatar alt="User settings" img={user.photoURL} rounded={true} /> : <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    {user.displayName}
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {user.email}
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
                                {
                                    user ?
                                        <Link onClick={handleLogOut} to="/">Logout</Link> :
                                        <Link to="/login">Login</Link>
                                }
                            </Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </> :
                        <div className='flex gap-3'>
                            <Link className='bg-[#75E6DA] rounded-md px-3 font-semibold text-[#05445E] py-1' to="/login"><button>Login</button></Link>
                            <Link className='bg-[#75E6DA] rounded-md px-3 font-semibold text-[#05445E] py-1' to="/reg"><button>Register</button></Link>
                        </div>
                    }

                </div>
                <Navbar.Collapse className=' text-[#05445E]'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/allToys">All Toys</ActiveLink>
                    <ActiveLink to="/myToys">My Toys</ActiveLink>

                    <ActiveLink to="/blog">Blog</ActiveLink>
                    <ActiveLink to="/about">About</ActiveLink>




                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;