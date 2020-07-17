import React from 'react';

const Store = () => {
    return (
        <>
            <div className="pt-6 pb-6 text-center" id="store">
                <h1 style={{fontSize: '3rem'}}>Featured Product</h1>
                <div className="row mt-5 ml-auto mr-auto">
                    <div className="col">
                        <a href="https://teespring.com/brewskie-T?tsmac=store&tsmic=books-brewskies&pid=46&cid=2752">
                        <img className="img rounded shadow feature-item" src="https://vangogh.teespring.com/v3/image/PrximIkrAEA63AH8HjyFOy8SBGk/480/560.jpg" alt="product" style = {{
                                width: '100%',
                                maxWidth: '500px'
                        }} />
                        <h3 className="mt-5">Books & Brewskies T-Shirt</h3>                        
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store;