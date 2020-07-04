import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../spinner';
import { handleStarRating } from '../BB/utils';
import { isEmpty } from 'lodash';
import StarRating from '../BB/components/StarRating';
import { insert_comment } from '../../services/bb/actions';
import Modal from '../Modal';

const Beer = ({ match }) => {
    const [beer, setBeer] = useState();
    const [error, setError] = useState(false);
    const [formName, setFormName] = useState('');
    const [formComment, setFormComment] = useState('');
    const [commentSuccessObj, setCommentSuccessObj] = useState({});
    const [empty, setEmpty] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (isEmpty(formName) || isEmpty(formComment)) {
            setEmpty(true);
            setLoading(false);
        }

        insert_comment(formName, formComment, beer._id)
            .then((obj) => {
                setCommentSuccessObj({ name: obj.name, comment: obj.comment });
                setFormComment('');
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }

    useEffect(() => {

        async function fetchBeer() {
            await axios.get('/reviews/beer', { params: { id: match.params.id } })
                .then((res) => {
                    setBeer(res.data);
                })
                .catch((err) => {
                    setError(true)
                })
        }

        fetchBeer();

    }, [])

    if (error) {
        return (
            <Modal
                showValue={true}
                closeDirect='/bb'
                buttonName='Visit Review Page'
                title='Empty'
                description="Item not found. Please visit our review page."
                svgType="empty"
            />
        )
    }

    if (beer) {
        const { myReview, ratings, type, name, imageUrl, description, comments, _id, bio, style } = beer;
        const { rating, comment } = myReview;

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

        let starRating = [];

        for (let i = 1; i < 6; i++) {
            if (rating >= i) {
                starRating.push(<p className="p-1" key={i}>{fullStarSvg}</p>);
            } else {
                if (rating.rating <= (i - .5) && rating.rating > (i - 1)) {
                    starRating.push(<p className="p-1" key={i}>{halfStartSvg}</p>);
                } else {
                    starRating.push(<p className="p-1" key={i}>{starSvg}</p>);
                }
            }
        }

        const custStar = handleStarRating(ratings);

        if (!isEmpty(commentSuccessObj)) {
            comments.push(commentSuccessObj);
            setCommentSuccessObj({});
        }

        let mapComments = [];

        if (!isEmpty(comments)) {
            mapComments = comments.map((item, index) => {
                return (
                    <div className="media" key={index}>
                        <img src={window.location.origin + "/media/logo.png"} className="mr-3" alt="BB" />
                        <div className="media-body">
                            <p className="mt-0 mb-0" style={{ fontSize: "1rem" }}>{item.name}</p>
                            <p>{item.comment}</p>
                        </div>
                    </div>
                )
            });
        }

        return (
            <div className="container-fluid mt-4">
                <div className="row m-auto">
                    <div className="col-6 text-right p-1 m-auto" style={{ minWidth: '290px' }}>
                        <img src={window.location.origin + '/' + imageUrl} className="img-fluid rounded shadow" alt="item" />
                    </div>
                    <div className="d-block d-md-none d-lg-none d-xl-none w-100" />
                    <div className="col p-1 ml-2">
                        <h2 className="modal-title">{name}</h2>
                        <div className="d-flex">Type: <p className="mb-2 ml-2 text-capitalize">{type}</p></div>
                        <div className="d-flex">Style: <p className="mb-2 ml-2 text-capitalize">{style}</p></div>
                        <div className="d-flex">From: <p className="mb-2 ml-2">{description}</p></div>
                        <div className="d-flex"><p>Our<br />Rating:</p><div className="star d-flex mb-2 ml-2">{starRating}{rating}</div></div>
                        <div className="d-flex"><p>Average<br />Rating:</p><div className="star d-flex mb-2 ml-2">{custStar.avgCustStarRating}{custStar.avgCustomerRating}</div></div>
                        <div className="d-flex">Our<br />Comment:<p className="mb-2 ml-2 text-capitalize">{comment}</p></div>
                        <div className="d-flex">Description:<p className="mb-2 ml-2 text-capitalize">{bio}</p></div>
                    </div>
                </div>
                <div className="row m-auto w-100" style={{ maxWidth: '870px' }}>
                    <div className="col">
                        <div className="modal-body">
                            {(!isEmpty(mapComments)) ? mapComments : <p>No Comments</p>}
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Name" name="Name"
                                        onChange={(e) => setFormName(e.target.value)}
                                        value={formName}
                                        required />
                                </div>

                                <div className="form-group">
                                    <textarea type="text"
                                        className="form-control"
                                        maxLength='500'
                                        placeholder="What do you think?"
                                        name="Comment"
                                        onChange={(e) => setFormComment(e.target.value)}
                                        value={formComment} style={{ minHeight: '150px' }}
                                        required />
                                </div>
                                <p className="m-0">Rating</p>
                                <StarRating itemId={_id} setError={() => setError(true)} />

                                <div className="modal-footer">
                                    <button type="submit" className='btn btn-primary btn-block'>
                                        {loading && <span className="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>}
                Submit
                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return <Spinner />;
}

export default Beer;