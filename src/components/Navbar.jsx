/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = (
    <>
      <li><NavLink className="font-bold text-slate-500" to="/">Home</NavLink></li>
      <li><NavLink className="font-bold text-slate-500" to="/about">About Us</NavLink></li>
    </>
  )

  return (
    <div className="max-w-7xl  mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className=" normal-case font-bold text-4xl">NexTalent</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center">
            <div className="dropdown z-50 dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/7N6yJY6/User.png" />
                </div>
              </label>

              <ul tabIndex={0} className="flex items-center justify-center dropdown-content mt-3 z-[1] rounded-box">
               
               
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
