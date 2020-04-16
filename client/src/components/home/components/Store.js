import React from 'react';
import Logo from '../../images/logo_products.png';
import {Link} from 'react-router-dom';


const Store = () => {
    return (
        <>
            <div className="pt-6 pb-6 text-center" id="store" style={{color: '#332212', backgroundColor: '#fff'}}>
                <h1 style={titleStyle}>Featured Products</h1>
                <div className="row m-auto mt-6">
                    <div className="col">
                        <img src={Logo} alt="product" />
                        <h3 className="mt-3">Books & Brewskies Coasters</h3>
                        <p className="mt-2">$20</p>
                    </div>
                    <div className="col">
                        <img src={Logo} alt="product" />
                        <h3 className="mt-3">Books & Brewskies Coasters</h3>
                        <p className="mt-2">$20</p>
                    </div>
                </div>
                <Link to="/store"><button className="btn-brown w-50 mt-6 ml-auto mr-auto" style={{maxWidth: '400px'}}>Store</button></Link>
            </div>
        </>
    )
}

export default Store;