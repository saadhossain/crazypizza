import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {userLogin} = useContext(AuthContext)

    //Create User Using Email and Password
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
        .then((result)=> {
            const user = result.user;
            console.log(user);
            toast.success('You have logged in Successfully...')
            form.reset()
        })
        .catch(err=> console.error(err))
    }
    return (
        <div className='py-10 flex justify-center'>
            <div className="flex flex-col max-w-md p-2 rounded-md sm:p-10 bg-gray-800 text-white">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-3xl font-bold text-2nd">Login your Account</h1>
                </div>
                <form onSubmit={handleLogin} className="space-y-4 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-2">
                        <div>
                            <label  htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label  htmlFor="password" className="text-sm">Password</label>
                                <Link href="#" className="text-xs hover:underline">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-2nd">Login</button>
                        </div>
                        <p className="px-6 text-md text-center">Don't have an account yet?
                            <Link to='/register' className="hover:underline text-2nd ml-2 font-semibold">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;