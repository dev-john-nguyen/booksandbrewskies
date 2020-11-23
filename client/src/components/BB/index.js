import React from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';
import NotFoundPage from '../NotFoundPage';
import Spinner from '../spinner';
import { handleStarRating } from './utils';
import { Link } from 'react-router-dom';

class BB extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviewItems: [],
            error: false,
            loading: true,
            itemObj: {},
            filterBB: 'all'
        }
    }

    componentDidMount = async () => {

        window.scrollTo(0, 0);

        let reviewItems;

        try {
            reviewItems = await axios.get('/reviews');
        } catch (e) {
            console.log(e)
            return this.setState({ error: true, loading: false })
        }

        this.setState({ reviewItems: reviewItems.data, loading: false });

    }

    render() {

        const starSvg = (
            <svg className="bi bi-star" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" clipRule="evenodd" />
            </svg>
        )

        const fullStarSvg = (
            <svg className="bi bi-star-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
        )

        const halfStartSvg = (
            <svg className="bi bi-star-half" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.354 5.119L7.538.792A.516.516 0 018 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0116 6.32a.55.55 0 01-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 01-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 01-.171-.403.59.59 0 01.084-.302.513.513 0 01.37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 01.163-.505l2.906-2.77-4.052-.576a.525.525 0 01-.393-.288L8.002 2.223 8 2.226v9.8z" clipRule="evenodd" />
            </svg>
        )


        if (this.state.loading) return <Spinner />;

        if (this.state.error) return <NotFoundPage text="Oops! Something Happened" body="Sorry, we are undergoing maintenance. Check back again later." />

        if (isEmpty(this.state.reviewItems)) return <NotFoundPage text="Empty" body="Looks like we weren't able to find any items. Please come back later." />

        const review = this.state.reviewItems.filter((item) => {
            if (this.state.filterBB === 'all') {
                return true;
            } else if (item.type === this.state.filterBB) {
                return true;
            } else {
                return false;
            }
        }).map((item, index) => {
            let starRating = [];

            for (let i = 1; i < 6; i++) {
                if (item.myReview.rating >= i) {
                    starRating.push(<p className="p-1" key={item._id + i}>{fullStarSvg}</p>);
                } else {
                    if (item.myReview.rating <= (i - .5) && item.myReview.rating > (i - 1)) {
                        starRating.push(<p className="p-1" key={item._id + i}>{halfStartSvg}</p>);
                    } else {
                        starRating.push(<p className="p-1" key={item._id + i}>{starSvg}</p>);
                    }
                }
            }

            const custRating = handleStarRating(item.ratings);

            return (
                <div className="reviews__item" key={index}>
                    <Link to={`/bb/${item._id}`}>
                        <img className="reviews__item__img" src={item.imageUrl} alt={item.name} width='250' height='350' key={index} style={{ height: '350px' }} />
                    </Link>
                    <div className="reviews__item__content">
                        <h3>{item.name}</h3>
                        <p>From: {item.description}</p>
                        <div className="reviews__item__rating">
                            <p>Our<br />Rating:</p>
                            <div className="reviews__item__stars">
                                {starRating}
                                <div>{item.myReview.rating}</div>
                            </div>
                        </div>
                        <div className="reviews__item__average">
                            <p>Average<br />rating:</p>
                            <div className="reviews__item__stars">
                                {custRating.avgCustStarRating}
                                <p>{custRating.avgCustomerRating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        //reverse array
        review.reverse();

        const recentReviews = this.state.reviewItems.filter((item) => {
            if (item.home) {
                return true;
            } else {
                return false;
            }
        }).map((item, index) => {
            let starRating = [];

            for (let i = 1; i < 6; i++) {
                if (item.myReview.rating >= i) {
                    starRating.push(<p className="p-1" key={item._id + i}>{fullStarSvg}</p>);
                } else {
                    if (item.myReview.rating <= (i - .5) && item.myReview.rating > (i - 1)) {
                        starRating.push(<p className="p-1" key={item._id + i}>{halfStartSvg}</p>);
                    } else {
                        starRating.push(<p className="p-1" key={item._id + i}>{starSvg}</p>);
                    }
                }
            }

            const custRating = handleStarRating(item.ratings);

            return (
                <div className="reviews__item" key={index}>
                    <h1 className="reviews__item__h1">{item.type === 'book' ? 'Book Of The Month' : 'Beer Of The Week'}</h1>
                    <Link to={`/bb/${item._id}`}>
                        <img className="reviews__item__img" src={item.imageUrl} alt={item.name} width='250' height='350' />
                    </Link>
                    <div className="reviews__item__content">
                        <h3>{item.name}</h3>
                        <p>From: {item.description}</p>
                        <div className="reviews__item__rating">
                            <p>Our<br />Rating:</p>
                            <div className="reviews__item__stars">
                                {starRating}
                                <p>{item.myReview.rating}</p>
                            </div>
                        </div>
                        <div className="reviews__item__average">
                            <p>Average<br />rating:</p>
                            <div className="reviews__item__stars">
                                {custRating.avgCustStarRating}
                                <p>{custRating.avgCustomerRating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        const handleFilterButtonClass = (name) => {
            var base = "reviews__filter__button";
            if (name === this.state.filterBB) {
                return base + ' active'
            } else {
                return base;
            }
        }

        return (
            <>
                <div className="reviews">
                    <div className="reviews__header">
                        <div className="reviews__text">
                            <h1>Reviews</h1>
                        </div>
                    </div>
                    <div className="reviews__recent">
                        {recentReviews}
                    </div>
                    <div className="reviews__filter">
                        <div className="reviews__filter__content" data-toggle="buttons">
                            <p>Filter :</p>
                            <button className={handleFilterButtonClass('book')} onClick={() => this.setState({ filterBB: 'book' })}>
                                Books
                        </button>
                            <button className={handleFilterButtonClass('all')} onClick={() => this.setState({ filterBB: 'all' })}>
                                All
                         </button>
                            <button className={handleFilterButtonClass('beer')} onClick={() => this.setState({ filterBB: 'beer' })}>
                                Beers
                        </button>
                        </div>
                    </div>
                    <div className="reviews__items">
                        {review}
                    </div>
                </div>
            </>
        )
    }
}

export default BB;