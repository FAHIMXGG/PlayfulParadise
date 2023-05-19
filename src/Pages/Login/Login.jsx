import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Footer from '../../Shared/Footer/Footer';
import useTitle from '../../Hook/UseTitle';

const Login = () => {
    useTitle('PlayfulParadise | Login')
    const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    
    const [error, setError] = useState('');
    const from = location.state?.from?.pathname || '/home'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }
    console.log(error)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }


    return (
        <div className=''>
            <form onSubmit={handleLogin} className="flex flex-col gap-4 mx-8 md:mx-52 md:px-80 mt-10 md:mb-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"

                        />
                    </div>
                    <TextInput className=''
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput 
                        id="password1"
                        type='password'
                        name='password'
                        required={true}
                    />
                    
                </div>
                <div>
                    <p className='text-red-500'>{error && "email address or password doesn't match"}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <div><p className='text-xs font-medium'>
                    No Account? <Link className='text-orange-400 font-bold' to="/reg">Register</Link> <br />
                    <p>Or Login with Google or GitHub</p>
                </p></div>
                <button className='py-2 rounded font-bold bg-[#75E6DA] text-[#05445E] hover:bg-[#B1D4E0]' type="submit">
                    Submit
                </button>
                
            </form>
            <div className='flex gap-3 justify-center text-[#05445E] mb-44'>
                    <button className='py-2 rounded font-bold px-3 bg-[#75E6DA]  hover:bg-[#B1D4E0]' onClick={handleGoogleSignIn}>Google</button>
                    <button className='py-2 rounded font-bold px-3 bg-[#75E6DA]  hover:bg-[#B1D4E0]' onClick={handleGitHubSignIn}>GitHub</button>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Login;