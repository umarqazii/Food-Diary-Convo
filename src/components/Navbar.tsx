import React from 'react';
import '@fontsource/montserrat/700.css'; 
import "primeicons/primeicons.css";

const Navbar = () => {
  return (
    <div style={{backgroundColor:'black', display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
        <div style={{marginLeft:'50px'}}>
            <ul style={{display:'flex', flexDirection:'row', gap: '50px', listStyleType: 'none', padding: '0'}} >
                <li style={{color:'white', fontSize:'10px', fontFamily: 'Montserrat, sans-serif'}}>Community</li>
                <li style={{color:'white', fontSize:'10px', fontFamily: 'Montserrat, sans-serif'}}>Books</li>
                <li style={{color:'white', fontSize:'10px', fontFamily: 'Montserrat, sans-serif'}}>Recipe Index</li>
                <li style={{color:'white', fontSize:'10px', fontFamily: 'Montserrat, sans-serif'}}>Popular</li>
            </ul>
        </div>
        <div style={{marginRight:'50px'}}>
            <ul style={{display:'flex', flexDirection:'row', gap: '50px', listStyleType: 'none', padding: '0'}}>
                <li style={{color:'white', fontFamily: 'Montserrat, sans-serif', fontSize:'10px'}}><i className="pi pi-sign-in"
                style={{ fontSize: "10px", color: "#509E2F" }}></i> &nbsp; Register</li>
                <li style={{color:'white', fontFamily: 'Montserrat, sans-serif', fontSize:'10px'}}><i className="pi pi-user"
                style={{ fontSize: "10px", color: "#509E2F" }}></i> &nbsp; Login</li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;