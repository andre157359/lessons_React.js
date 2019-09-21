import React from 'react';

import './app-header.css'
const Appheader = ({liked, allPosts}) => {
    return (
        <div className = "app-header d-flex">
            <h1>Рыбин Андрей</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>


        </div>
    )
}

export default Appheader;