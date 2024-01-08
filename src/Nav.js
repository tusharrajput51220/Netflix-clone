import React from 'react'
import './Nav.css'
function Nav(){

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //            handleShow(true);
    //         } else handleShow(false);
    //         });
    //         return () => {
    //         window.removeEventListener("scroll");
    //         }
    // },[])
    return (
        // <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav'>
            <img 
            className='nav_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/225px-Netflix_2014_logo.svg.png'
            alt='Netflix-logo'  
            />
        </div>
    )
}
export default Nav