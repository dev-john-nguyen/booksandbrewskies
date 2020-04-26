import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import StarRating from './StarRating';
import { insert_comment } from '../../../services/bb/actions';
import Modal from '../../Modal';

const Item = ({ name, id, comments, image, custAvg, custStar, myAvg, myStar, myComment, handleClose }) => {
    const [formName, setFormName] = useState('');
    const [formComment, setFormComment] = useState('');
    const [empty, setEmpty] = useState(false);
    const [error, setError] = useState(false);
    const [commentSuccessObj, setCommentSuccessObj] = useState({});
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (isEmpty(formName) || isEmpty(formComment)) {
            setEmpty(true);
            setLoading(false);
        }

        insert_comment(formName, formComment, id)
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

    if (empty) {
        return (
            <Modal
                showValue={true}
                closeDirect='/bb'
                buttonName='Back'
                handleState={() => {
                    setEmpty(false);
                }}
                title='Empty'
                description='One of the fields are empty.'
                svgType="empty"
            />
        )
    }

    if (error) {
        return (
            <Modal
                showValue={true}
                closeDirect='/bb'
                buttonName='Back'
                handleState={() => {
                    setError(false);
                    handleClose()
                }}
                title='Error'
                description='Sorry, something went wrong'
                svgType="error"
            />
        )
    }



    if (!isEmpty(commentSuccessObj)) {
        comments.push(commentSuccessObj);
        setCommentSuccessObj({});
    }

    let mapComments = [];

    if (!isEmpty(comments)) {
        mapComments = comments.map((item, index) => {
            return (
                <div className="media" key={index}>
                    <img src="./media/logo.png" className="mr-3" alt="BB" />
                    <div className="media-body">
                        <p className="mt-0 mb-0" style={{ fontSize: "1rem" }}>{item.name}</p>
                        <p className="text-muted">{item.comment}</p>
                    </div>
                </div>
            )
        });
    }

    return (
        <>
            <div className="modal d-flex" tabIndex="-1" role="dialog" id='main' mousewheel='passive'>
                <div className="position-absolute h-100 w-100" onClick={handleClose} />
                <div className="modal-dialog w-100" role="document">
                    <div className="modal-content" style={{ height: '90vh', overflow: 'auto' }}>
                        <div className="modal-header justify-content-end">
                            <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="container-fluid">
                        <div className="row m-auto" style={{ fontSize: '.6rem' }}>
                            <div className="col-6 text-right"><img src={image} className="img-fluid rounded shadow" alt="item" /></div>

                            <div className="col">
                                <h5 className="modal-title">{name}</h5>
                                <div className="d-flex"><p>Our<br />Rating:</p><div className="star d-flex mb-0 ml-1">{myStar}{myAvg}</div></div>
                                <div className="d-flex"><p>Average<br />Rating:</p><div className="star d-flex mb-0 ml-1">{custStar}{custAvg}</div></div>
                                <div className="d-flex">Our<br />Comment:<p className="text-muted mb-0 ml-1">{myComment}</p></div>
                            </div>
                        </div>
                        <div className="row m-auto w-100">
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
                                <StarRating itemId={id} setError={() => setError(true)} />
                        
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;