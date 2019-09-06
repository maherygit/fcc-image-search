import React from 'react';
import './loader.css';

const Loader = (props) => {

    return (
        <div className='loader__container'>
            <div className="loaderBall"></div>
            <div className="loaderBall"></div>
            <div className="loaderBall"></div>
        </div>
    );
}

export default Loader;