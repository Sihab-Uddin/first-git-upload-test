import React from 'react';
import Navigation from '../Navigation/Navigation';

const Error404 = () => {
    return (
        <div>
            <Navigation/>
            <div className='text-center'>
                <h1>404</h1>
                <h1>This Page is Not Found</h1>
            </div>
        </div>
    );
};

export default Error404;