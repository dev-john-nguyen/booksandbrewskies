import React from 'react';
import axios from 'axios';
import MyModal from '../Modal';
import { Modal } from 'react-bootstrap';

class UploadBB extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: '',
            type: '',
            name: '',
            description: '',
            rating: '',
            comment: '',
            bio: '',
            style: '',
            error: [false, ''],
            success: false,
            validImage: false
        }
    }

    handleInputChanges = (event) => {
        event.target.name === 'bbImage' ? this.setState({ [event.target.name]: event.target.files[0] }) : this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();

        const { imageUrl, type, name, description, rating, comment, style, bio, validImage } = this.state;
        // const validImageTypes = ['image/gif', "image/jpeg", 'image/png'];

        if (!validImage) return alert('Looks like the image url is invalid. Please make sure the image displays');

        if (type === '' || rating === '') {
            alert("Rating Or Type Is Empty");
            return;
        }

        const dataObj = {
            type,
            name,
            description,
            rating,
            comment,
            style,
            bio,
            imageUrl
        }

        // if (bbImage === '') {
        //     return this.setState({ error: [true, 'Please Upload Image (jpgm jpeg, png, or gif)'] })
        // }

        // if (!validImageTypes.includes(bbImage.type)) {
        //     return this.setState({ error: [true, 'Images Only. Must Be jpg, jpeg, png, or gif'] });
        // }

        // if(bbImage.size >= 1000000) return this.setState({ error: [true, 'Image is too large. Please upload a smaller file image.'] });

        // const dataString = JSON.stringify(dataObj);

        // const data = new FormData();
        // data.append('bbImage', bbImage);
        // data.append('data', dataString);

        // const headers = {
        //     'Content-Type': 'multipart/form-data'
        // }

        await axios.post('/upload/reviews', dataObj)
            .then((obj) => {
                console.log(obj);
                return this.setState({
                    success: [true, 'Item Added'],
                    type: '',
                    name: '',
                    description: '',
                    rating: '',
                    comment: '',
                    bbImage: ''
                })
            })
            .catch((err) => {
                console.log(err);
                return this.setState({ error: [true, 'Failed To Upload'] })
            })
    }

    render() {

        const { name, description, comment, style, bio, success, error } = this.state;
        const { handleClose } = this.props;

        if (error[0]) {
            return (
                <MyModal
                    showValue={true}
                    closeDirect='/men'
                    buttonName='Close'
                    title='Error'
                    description={error[1]}
                    svgType="error"
                    handleState={() => this.setState({ error: [false, ''] })}
                />
            )
        }

        if (success) {
            return (
                <MyModal
                    showValue={true}
                    buttonName='Close'
                    title='Item Added'
                    description=""
                    svgType="success"
                    handleState={() => this.setState({ success: false })}
                />
            )
        }


        return (

            <div className="admin-form">
                <div className="admin-form__content">
                    <div className="admin-form__title">
                        <h1>{name}</h1>
                        <figure className="admin-form__close" onClick={handleClose}>X</figure>
                    </div>
                    <div className="admin-form__body">
                        <img className="img-fluid rounded shadow"
                            src={this.state.imageUrl} alt='Invalid Url' width='250px' height='350px'
                            onLoad={() => this.setState({ validImage: true })}
                            onError={() => this.setState({ validImage: false })}
                            style={{ width: '250px', height: '350px' }} />

                        <h4 className='mt-3'>New Item</h4>
                        <form className="uploadBB-form text-left" onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="type">Type Of Item</label>
                                <select name="type" id='type' className="form-control" onChange={this.handleInputChanges} required>
                                    <option value="" defaultValue>Type</option>
                                    <option value="beer">Beer</option>
                                    <option value="book">Book</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">Image Url</label>
                                <input type='text' className="form-control" name='imageUrl' id="imageUrl" placeholder="Copied Image Url" onBlur={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type='text' className="form-control" name='name' id='name' placeholder='Name' value={name} onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Where is it from?</label>
                                <input type='text' className="form-control" name='description' id='description' placeholder="Where it's from" value={description} onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="style">Style of Beer or Book</label>
                                <input type='text' className="form-control" name='style' id='style' placeholder='Style of beer or book' value={style} onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Description Of The Beer or Book</label>
                                <textarea type='text' className="form-control" name='bio' id='bio' placeholder='Description of the beer or book' value={bio} onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">What's your rating?</label>
                                <select name="rating" className="form-control" id='rating' onChange={this.handleInputChanges} required>
                                    <option value="" defaultValue>Rating</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment">What do you think about it?</label>
                                <textarea type='text' className="form-control" name='comment' id='comment' placeholder="Any Comments?" value={comment} onChange={this.handleInputChanges} required />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                    <div className="admin-form__footer">
                        <button className="btn btn-block btn-outline-danger" onClick={handleClose}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default UploadBB;