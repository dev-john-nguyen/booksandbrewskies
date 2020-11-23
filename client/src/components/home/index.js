import React from 'react';
import Contact from './components/Contact';
import Media from './components/Media';
import OfTheMonth from './components/OfTheMonth';
import Products from './components/Products';
import Team from './components/Team';
import Header from './components/Header';

const NewHome = () => {
    return (
        <div className="main">
            <div className="background-image" />
            <Header />
            <OfTheMonth />
            <Media />
            <Team />
            <Products />
            <Contact />
        </div>
    )
}

export default NewHome;