import React, { useState } from 'react';

const Products = () => {
    const [slideIn, setSlideIn] = useState(1);
    const [slideOut, setSlideOut] = useState(0);

    const renderSlide = (productNum) => {
        if (slideIn === productNum) {
            return 'slide-in opacity-1'
        }
        if (slideOut === productNum) {
            return 'slide-out'
        }

        return ''
    }

    return (
        <div className="products">
            <div className="products__text">
                <div className="products__h1">
                    <h1>Support Our Podcast</h1>
                </div>
                <button className="products__button" onClick={() => {
                    if (slideIn < 4 && slideOut !== 4) {
                        setSlideIn(slideIn => slideIn + 1);
                        setSlideOut(slideOut => slideOut + 1);
                    } else if (slideIn === 4) {
                        setSlideIn(1)
                        setSlideOut(slideOut => slideOut + 1);
                    } else {
                        setSlideIn(slideIn => slideIn + 1);
                        setSlideOut(1);
                    }
                }}>Next Product</button>
            </div>
            <div className="products__product">
                <div className="products__product__list">
                    <div className={`products__product-1 ${renderSlide(1)}`}>
                        <div className="products__product__img"><img src="https://vangogh.teespring.com/v3/image/PrximIkrAEA63AH8HjyFOy8SBGk/480/560.jpg" alt="img1" /></div>
                    </div>
                    <div className={`products__product-2 ${renderSlide(2)}`}>
                        <div className="products__product__img"><img src="https://vangogh.teespring.com/v3/image/WEMw1p1B_RU2sH3FJBpkaPuNeiE/480/560.jpg" alt="img2" /></div>
                    </div>
                    <div className={`products__product-3 ${renderSlide(3)}`}>
                        <div className="products__product__img"><img src="https://vangogh.teespring.com/v3/image/KZFWtUrvjRwYCyaHfuG0e1spfig/480/560.jpg" alt="img3" /></div>
                    </div>
                    <div className={`products__product-4 ${renderSlide(4)}`}>
                        <div className="products__product__img"><img src="https://vangogh.teespring.com/v3/image/PrximIkrAEA63AH8HjyFOy8SBGk/480/560.jpg" alt="img4" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;