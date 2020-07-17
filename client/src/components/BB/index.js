import React from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';
import Modal from '../Modal';
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

        if (this.state.error) {
            return (
                <Modal
                    showValue={true}
                    closeDirect='/'
                    buttonName='Close'
                    title='Error'
                    description='Sorry, we are undergoing maintenance. Check back again later.'
                    svgType="error"
                />
            )
        }

        if (isEmpty(this.state.reviewItems)) {
            return (
                <Modal
                    showValue={true}
                    closeDirect='/'
                    buttonName='Close'
                    title='Empty'
                    description="We currently don't have any items. Check back again later."
                    svgType="empty"
                />
            )

        }

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
                <div className="bb-item m-3 p-2 d-flex align-items-center flex-column" style={{ width: '220px' }} key={index}>
                    <Link to={`/bb/${item._id}`}>
                        <img className="img-fluid rounded shadow" src={item.imageUrl} alt={item.name} width='250' height='350' key={index} style={{ height: '350px' }} />
                    </Link>
                    <div className="item-content mt-4">
                        <h3>{item.name}</h3>
                        <p>From: {item.description}</p>
                        <div className="d-flex">
                            <p>Our<br />Rating:</p>
                            <div className="star d-flex ml-1">
                                {starRating}
                                <div>{item.myReview.rating}</div>
                            </div>
                        </div>
                        <div className="cust-avg-rating d-flex">
                            <p>Average<br />rating:</p>
                            <div className="star ml-1 d-flex">{custRating.avgCustStarRating}{custRating.avgCustomerRating}</div></div>
                    </div>
                    <Link
                        to={`/bb/${item._id}`}
                        className="view-more mt-auto p-2">
                        View
                    </Link>
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
                <div className="col" style={{ width: '220px' }} key={index}>
                    <h1 className="text-center mb-4" style={{fontSize: '3rem'}}>{item.type === 'book' ? 'Book Of The Month': 'Beer Of The Week'}</h1>
                    <div className="recent-review-content p-2">
                        <Link to={`/bb/${item._id}`}>
                            <img className="img-fluid rounded shadow" src={item.imageUrl} alt={item.name} width='250' height='350' key={index} style={{ height: '350px' }} />
                        </Link>
                        <div className="item-content">
                            <h3>{item.name}</h3>
                            <p>From: {item.description}</p>
                            <div className="d-flex">
                                <p>Our<br />Rating:</p>
                                <div className="star d-flex ml-1">
                                    {starRating}
                                    <div>{item.myReview.rating}</div>
                                </div>
                            </div>
                            <div className="cust-avg-rating d-flex">
                                <p>Average<br />rating:</p>
                                <div className="star ml-1 d-flex">{custRating.avgCustStarRating}{custRating.avgCustomerRating}</div></div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <>
                <div className="row m-auto align-items-center vh-100 text-center" style={{ minHeight: '510px' }}>
                    <div className="col align-self-center">
                        <h1 className="display-4 font-weight-normal header-title animated jackInTheBox">The Books and Beers Gallery</h1>
                        <p className="lead">New beers every week and new books every month!</p>
                        <div>
                        </div>
                    </div>
                </div>
                <div id="chevron-attraction" />
                <div className="pt-6 pb-6" style={{ color: '#332212', backgroundColor: '#fff' }}>
                    <div className="row mb-5 ml-auto mr-auto">
                        {recentReviews}
                    </div>
                    <div className="row mb-5 ml-auto mr-auto">
                        <div className="btn-group btn-group-toggle m-auto w-50" data-toggle="buttons" style={{ minWidth: '300px' }}>
                            <label className="btn btn-secondary">
                                <input type="radio" name="book" id="book" autoComplete="off" onClick={() => this.setState({ filterBB: 'book' })} />
                            Books
                        </label>
                            <label className="btn btn-secondary active">
                                <input type="radio" name="all" id="all" autoComplete="off" onClick={() => this.setState({ filterBB: 'all' })} defaultChecked />
                            All
                         </label>
                            <label className="btn btn-secondary">
                                <input type="radio" name="beer" id="beer" autoComplete="off" onClick={() => this.setState({ filterBB: 'beer' })} />
                            Beers
                        </label>
                        </div>
                    </div>
                    <div className="row m-auto d-flex justify-content-between bb-item-container" style={{ flexWrap: 'wrap' }}>
                        {review}
                    </div>
                </div>
            </>
        )
    }
}

export default BB;