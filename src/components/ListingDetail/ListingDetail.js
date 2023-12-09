import React from 'react';

import { useParams, Link } from 'react-router-dom';

export default function ListingDetail() {
    const { listingId } = useParams();
    return (
        <>
            <h2>Listing</h2>
            <p>id: {listingId} </p>
            <Link to="/listings">back</Link>
        </>

    )
}