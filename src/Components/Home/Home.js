import React from 'react';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
                    <Navigation/>
            <section className='py-2'>
                <div className='container'>
                    <h1>Hello World</h1>
                </div>
            </section>
        </div>
    );
};

export default Home;