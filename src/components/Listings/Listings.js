import React from 'react';
import { Link } from 'react-router-dom';

export default function Listings() {
    return (
        <>
        <h2>Listings</h2>
        
        
            <nav>
                <ul>
                <li>
                    <Link to="/listings/111">111</Link>
                </li>
                <li>
                    <Link to="/listings/222">222</Link>
                </li>
                <li>
                    <Link to="/listings/333">333</Link>
                </li>
                </ul>
            </nav>
            
            
        </>

    )
}