import React from 'react';
import loadingGig from '../images/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={loadingGig} alt=""/>
        </div>
    )
}
