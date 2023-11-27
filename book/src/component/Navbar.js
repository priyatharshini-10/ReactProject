import React from "react";
// import Footer from "./Footer";
import "../App";
import {Link} from'react-router-dom';
import { Typography } from "@mui/material";
const Navbar=()=>
{
    return(
        <div className="navbar">
            <div><h1>Book Review Application</h1></div>
            <div style={{display:"flex", flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
                <Link to="/favorites" sx={{m:"2"}}>
                <h3>Your Favorites</h3>
                </Link>
            </div>
            <div>
                <Link to="/signin" sx={{m:"2"}}>
               <h3>Sign in</h3>
                </Link>
            </div>
            <div>
                <Link to="/signup">
                <h3>Sign Up</h3>
                </Link>

            </div>
            <div>
                <Link to="/review">
                <h3>Review</h3>
                </Link>

            </div>
        </div>
    )
}
export default Navbar;