import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBook, FaChalkboardTeacher, FaCheckCircle, FaHome, FaUserCog, FaUserGraduate, FaWallet } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
// import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const {user} = useAuth()
    // const isInstructor = false;

    // const isAdmin = useAdmin();
    // console.log(isAdmin);
    return (
        <>

            <div className="drawer lg:drawer-open sm:drawer-open md:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    {/* Page content here */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-success drawer-button lg:hidden">Open Dashboard</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">


                        {/* {
                            isAdmin && <>
                                <li><Link to='/dashboard/home'><FaHome></FaHome>Admin Home</Link></li>
                                <li><Link to='/dashboard/manageclasses'><FaBook></FaBook>Manage Classes</Link></li>
                                <li><Link to='/dashboard/manageusers'><FaUserCog></FaUserCog>Manage Users</Link></li>

                                <div className="divider"></div>
                                <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                                <li><Link to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher>Instructors</Link></li>
                                <li><Link to='/classes'><FaBook></FaBook>Classes</Link></li>
                                </>

                                } */}

                                {user && 
                                    <>
                                        <li><Link to='/dashboard/home'><FaHome></FaHome>User Home</Link></li>
                                        <li><Link to='/dashboard/myselectedclasses'><FaCheckCircle></FaCheckCircle>My Selected classes</Link></li>
                                        <li><Link to='/dashboard/myenrolledclasses'><FaUserGraduate></FaUserGraduate>My Enrolled Classes</Link></li>
                                        <li><Link to='/dashboard/paymenthistory'><FaWallet></FaWallet>Payment History</Link></li>
                                        <div className="divider"></div>
                                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                                        <li><Link to='/instructors'><FaChalkboardTeacher></FaChalkboardTeacher>Instructors</Link></li>
                                        <li><Link to='/classes'><FaBook></FaBook>Classes</Link></li>
                                    </>

                                }

                            </ul>

                </div>
            </div>
        </>

    );
};

export default Dashboard;