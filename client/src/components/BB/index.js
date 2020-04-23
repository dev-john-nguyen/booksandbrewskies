import React from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';
import Modal from '../Modal';
import Spinner from '../spinner';
import Item from './components/Item';
import { handleStarRating } from './utils';

class BB extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviewItems: [],
            error: false,
            loading: true,
            itemObj: {},
            filterBB: 'all',
            login: {enter: false, password: 'ShaneHasABigLeftNut'},
            password: ''
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

    handleLogin = (e) => {
        e.preventDefault()
        if(this.state.password === this.state.login.password){
            this.setState({login: {enter: true}})
        }else{
            alert('Incorrect Password');
        }
    }

    render() {

        if (!this.state.login.enter) {
            return (
                <div className="row align-items-center m-auto text-center" style={{height: '90vh'}}>
                    <div className="col align-self-center m-auto">                     
                        <form className="login m-auto w-50 rounded" onSubmit={this.handleLogin} style={{minWidth: '290px'}}>
                        <h1>Only Men Can Enter</h1>
                            <input type='password' placeholder="password" name='password' className="form-control" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                            <button type="submit" className="btn btn-primary mt-3 ml-auto mr-auto">Login</button>
                        </form>
                    </div>
                </div>
            )
        }

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

            // //calc customer rating avg
            // let sum = 0;
            // for (let i = 0; i < item.ratings.length; i++) {
            //     sum += parseInt(item.ratings[i], 10);
            // }

            // let avgCustomerRating = sum / item.ratings.length;

            // avgCustomerRating % 1 !== 0 && (avgCustomerRating = avgCustomerRating.toFixed(1))

            // let avgCustStarRating = [];

            // for (let i = 1; i < 6; i++) {
            //     if (avgCustomerRating >= i) {
            //         avgCustStarRating.push(<p className="p-1" key={'avg' + i}>{fullStarSvg}</p>);
            //     } else {
            //         if (avgCustomerRating <= (i - .5) && avgCustomerRating > (i - 1)) {
            //             avgCustStarRating.push(<p className="p-1" key={'avg' + i}>{halfStartSvg}</p>);
            //         } else {
            //             avgCustStarRating.push(<p className="p-1" key={'avg' + i}>{starSvg}</p>);
            //         }
            //     }
            // }

            return (
                <div className="bb-item m-3 p-2 d-flex align-items-start flex-column rounded" style={{ width: '250px' }} key={index}>
                    <img className="img-fluid rounded shadow" src={item.imageUrl} alt={item.name} width='250' height='350' key={index} style={{ height: '350px' }} />
                    <div className="item-content">
                        <h2>{item.name}</h2>
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
                    <button
                        className="btn btn-primary btn-block mt-auto p-2"
                        onClick={() => this.setState(
                            {
                                itemObj:
                                {
                                    name: item.name,
                                    id: item._id,
                                    comments: item.comments,
                                    image: item.imageUrl,
                                    custAvg: custRating.avgCustomerRating,
                                    custStar: custRating.avgCustStarRating,
                                    myAvg: item.myReview.rating,
                                    myComment: item.myReview.comment,
                                    myStar: starRating
                                }
                            })}>
                        View
                    </button>
                </div>
            )
        })

        const { itemObj, filterBB } = this.state;

        return (
            <div className="container">
                <div className="row mb-5">
                    <h1 className="m-auto position-relative" style={{top: '20px'}}>B/B Reviews</h1>
                </div>
                <div className="row">
                    <div className="btn-group btn-group-toggle m-auto w-50" data-toggle="buttons" style={{minWidth: '300px'}}>
                        <label className="btn btn-secondary">
                            <input type="radio" name="book" id="book" autoComplete="off" onClick={() => this.setState({filterBB: 'book'})} />
                            Books
                        </label>
                        <label className="btn btn-secondary active">
                            <input type="radio" name="all" id="all" autoComplete="off" onClick={() => this.setState({filterBB: 'all'})} defaultChecked/>
                            All
                         </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="beer" id="beer" autoComplete="off" onClick={() => this.setState({filterBB: 'beer'})}/>
                            Beers
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{ flexWrap: 'wrap' }}>
                    {review}
                </div>
                {!isEmpty(itemObj) && <Item
                    name={itemObj.name}
                    id={itemObj.id}
                    comments={itemObj.comments}
                    image={itemObj.image}
                    custAvg={itemObj.custAvg}
                    custStar={itemObj.custStar}
                    myAvg={itemObj.myAvg}
                    myStar={itemObj.myStar}
                    myComment={itemObj.myComment}
                    handleClose={() => this.setState({ itemObj: {} })
                    }
                />}
            </div>
        )
    }
}

export default BB;