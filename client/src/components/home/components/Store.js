import React from 'react';
import Coaster from '../../images/coasters.svg';



const Store = () => {
    const titleStyle = {
        borderBottom: "2px solid #332212",
        maxWidth: "500px",
        margin: "auto",
        padding: "10px"
    }
    return (
        <>
            <div className="pt-6 pb-6 text-center" id="store" style={{color: '#332212', backgroundColor: '#fff'}}>
                <h1 style={titleStyle}>Featured Products</h1>
                <div className="row mt-6">
                    <div className="col">
                        <img src={Coaster} />
                        <h3>Books & Brewskies Coasters</h3>
                        <p>$20</p>
                    </div>
                    <div className="col">
                        <img src={Coaster} />
                        <h3>Books & Brewskies Coasters</h3>
                        <p>$20</p>
                    </div>
                </div>
                <button className="btn-brown w-50 mt-6 ml-auto mr-auto" style={{maxWidth: '400px'}}>Shop</button>
            </div>
        </>
    )
}

export default Store;