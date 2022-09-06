import React from 'react';

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa"

function Navbar({title}) {
  return (
//     <div className="navbar bg-base-100">
//   <div className="flex-1">
//     <a className="btn btn-ghost normal-case text-xl"><FaGithub /></a>
//   </div>
//   <div className="flex-none">
//     <ul className="menu menu-horizontal p-0">

//       {props.navItems.map((navItem,index)=>(
//         <li key={index}>
//             <NavLink
//                 to={`/${navItem.toLowerCase()}`}
//                 style={({isActive})=>{
//                     return {
//                         color: isActive ? "white" : ""
//                     };
//                 }}
//             >
//                 {navItem}
//             </NavLink>
//         </li>
//       ))
//         }
//     </ul>
//   </div>
// </div>

    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
    
        <div className="container mx-auto">
            <div className="flex-none px-2 mx-2">
                <FaGithub className='inline pr-2 text-3xl'/>
                <Link to="/" className='text-lg font-bold align-middle'>
                    {title}
                </Link>
            </div>

            <div className="flex-1 px-2 mx-2 ">
                <div className="flex justify-end">
                    <Link to="/" className='btn btn-ghost btn-sm rounded-btn'>
                        Home
                    </Link>
                    
                    <Link to="/about" className='btn btn-ghost btn-sm rounded-btn'>
                        About
                    </Link>

                </div>
            </div>
        </div>

    </nav>


  );
}

Navbar.defaultProps={
    title : "Github Finder"
};

Navbar.protoTypes={
    title: PropTypes.string

}

export default Navbar;
