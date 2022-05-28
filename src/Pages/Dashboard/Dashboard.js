import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto bg-[#e74900c4] text-white text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My orders</Link></li>
                        <li><Link to='/dashboard/addreview'>Add a review</Link></li>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;