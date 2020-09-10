import React from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

class EditItem extends React.Component {
    constructor(props) {
        super(props);

        const { name, description, imageUrl, bio, style, myReview, type, home, _id } = props.editItem;

        this.state = {
            _id: _id,
            imageUrl: imageUrl,
            type: type,
            name: name,
            description: description,
            rating: myReview.rating,
            comment: myReview.comment,
            bio: bio,
            home: home,
            style: style,
            error: [false, ''],
            success: false,
            validImage: false
        }
    }


    handleFormSubmit = async (e) => {
        e.preventDefault();
        const {
            imageUrl,
            type,
            name,
            description,
            rating,
            comment,
            bio,
            home,
            style,
            _id,
            validImage
        } = this.state

        if(!validImage) return alert('Looks like the image url is invalid. Please make sure the image displays');

        const updatedItem = {
            imageUrl,
            type,
            name,
            description,
            rating,
            comment,
            bio,
            home,
            style,
            _id
        }

        await axios.post('/men/reviews/update', updatedItem)
            .then((res) => {
                if (res.data.updated) {
                    alert(`Successfully updated ${res.data.name}`)
                    window.location.replace('/men')
                } else {
                    throw new Error("Faild to update");
                }
            })
            .catch(err => {
                console.log(err)
                alert('failed') 
            })
    }

    handleInputChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleOnDelete = async () => {
        if (window.confirm(`Are you sure you want to delete ${this.state.name}?`)) {
            await axios.post('/men/reviews/delete', { _id: this.state._id })
                .then((res) => {
                    if (res.data.deleted) {
                        alert(`Successfully deleted ${res.data.name}`)
                        window.location.replace('/men')
                    } else {
                     throw new Error("return updated as false");
                    }
                })
                .catch(err => {
                    console.log(err)
                    alert("Failed to delete item")
                })
        }
    }


    render() {

        const { handleClose } = this.props

        const { name, description, imageUrl, bio, style, comment, rating, type, home } = this.state;

        return (
            <Modal show={true}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName={"contactModal text-center"}
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img className="img-fluid rounded shadow" src={imageUrl} alt={name} width='250' height='350' style={{ height: '350px' }}
                        onLoad={() => this.setState({ validImage: true })}
                        onError={() => this.setState({ validImage: false })}
                    />
                    <br />
                    <h4 className='mt-3'>{name}</h4>
                    <form className="uploadBB-form text-left" onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                        <div className="form-check mb-2">
                            <input type='checkbox' className="form-check-input" id="home" name='home' defaultChecked={home} onChange={(e) => this.setState({ home: e.target.checked })} />
                            <label className="form-check-label" htmlFor="home">Display On Home Page?</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl">Type Of Item</label>
                            <select name="type" id='type' className="form-control" defaultValue={type} onChange={this.handleInputChanges} required>
                                <option value="beer">Beer</option>
                                <option value="book">Book</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl">Copy Image Url</label>
                            <input type='text' className="form-control" name='imageUrl' id="imageUrl" placeholder="Copied Image Url" defaultValue={imageUrl} onBlur={this.handleInputChanges} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type='text' className="form-control" name='name' id='name' placeholder='Name' defaultValue={name} onChange={this.handleInputChanges} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Where is it from?</label>
                            <input type='text' className="form-control" name='description' id='description' placeholder="Where it's from" defaultValue={description} onChange={this.handleInputChanges} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="style">Style of Beer or Book</label>
                            <input type='text' className="form-control" name='style' id='style' placeholder='Style of beer or book' defaultValue={style} onChange={this.handleInputChanges} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Description Of The Beer or Book</label>
                            <textarea type='text' className="form-control" name='bio' id='bio' placeholder='Description of the beer or book' defaultValue={bio} onChange={this.handleInputChanges} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rating">What's your rating?</label>
                            <select name="rating" id='rating' className="form-control" defaultValue={rating} onChange={this.handleInputChanges} required>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">What do you think about it?</label>
                            <textarea type='text' className="form-control" name='comment' id='comment' placeholder="Any Comments?" defaultValue={comment} onChange={this.handleInputChanges} required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-block btn-outline-danger" onClick={this.handleOnDelete}>Delete</button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default EditItem;