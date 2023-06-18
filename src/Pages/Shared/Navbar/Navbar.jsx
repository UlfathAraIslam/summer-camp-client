import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useSelectedClasses from '../../../hooks/useSelectedClasses';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const [selectedClasses] = useSelectedClasses();

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
    }
    const handleDark = ()=> {
        const html = document.querySelector('html');
        html.classList.toggle('dark');
    }

    const navOptions = <>
       <li className='text-black'><Link to='/'>Home</Link></li>
       <li className='text-black' ><Link to='/instructors'>Instructors</Link></li>
       <li className='text-black'><Link to='/classes'>Classes</Link></li>
       <li className='text-black'><Link to='/dashboard'>Dashboard</Link></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-20 bg-success max-w-screen-xl text-white font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-6xl text-success">JLLS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                
                {
                    user ? <>
                        <button onClick={handleLogOut} className="btn btn-outline btn-success font-extrabold">Logout</button>
                    </> :
                    <>
                    <Link to='/login'><button className="btn btn-outline btn-success font-extrabold">Login</button></Link>
                    </>
                   
                }
                <button  onClick={handleDark} className="btn btn-outline btn-success font-extrabold mr-5 ms-5">Dark Mode</button>

            </div>
        </div>
    );
};

export default Navbar;