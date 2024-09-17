import React from 'react';

const Navbar = () => {
  return (
    <div style={{backgroundColor:'black', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <div>
            <ul style={{display:'flex', flexDirection:'row', gap: '50px', listStyleType: 'none', padding: '0'}} >
                <li style={{color:'white'}}>Community</li>
                <li style={{color:'white'}}>Books</li>
                <li style={{color:'white'}}>Recipe Index</li>
                <li style={{color:'white'}}>Popular</li>
            </ul>
        </div>
        <div>
            <ul style={{display:'flex', flexDirection:'row', gap: '50px', listStyleType: 'none', padding: '0'}}>
                <li style={{color:'white'}}>Register</li>
                <li style={{color:'white'}}>Login</li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;