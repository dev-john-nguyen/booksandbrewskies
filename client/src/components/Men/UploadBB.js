import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

class UploadBB extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bbImage: null,
            type: '',
            name: '',
            description: '',
            rating: '',
            comment: '',
            error: [false, '']
        }
    }

    handleInputChanges = (event) => {
        event.target.name === 'bbImage' ? this.setState({ [event.target.name]: event.target.files[0] }) : this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const { bbImage, type, name, description, rating, comment } = this.state;
        const validImageTypes = ['image/gif', "image/jpeg", 'image/png'];

        const dataObj = {
            type,
            name,
            description,
            rating,
            comment
        }

        if (bbImage === null) {
            return this.setState({ error: [true, 'Please Upload Image (jpgm jpeg, png, or gif)'] })
        }

        if (!validImageTypes.includes(bbImage.type)) {
            return this.setState({ error: [true, 'Images Only. Must Be jpg, jpeg, png, or gif'] });
        }

        const data = new FormData();
        data.append('bbImage', bbImage);
        data.append('data', dataObj);

        upload_BB(data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Upload Book and Beer</h1>
                        <form className="uploadBB-form" onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <select name="type" className="form-control" onChange={this.handleInputChanges} required>
                                    <option defaultValue>Type</option>
                                    <option value="beer">Beer</option>
                                    <option value="book">Book</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="bbImage">Upload Book or Brewskie</label>
                                <input type='file' name='bbImage' id="bbImage" className="form-control-file" onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <input type='text' className="form-control" name='name' placeholder='Name' onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <input type='text' className="form-control" name='description' placeholder='From' onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <select name="rating" className="form-control" onChange={this.handleInputChanges} required>
                                    <option defaultValue>Rating</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea type='text' className="form-control" name='comment' placeholder="Any Comments?" onChange={this.handleInputChanges} required/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const upload_BB = async(data) => {
    console.log(data);
    console.log("called");
}

export default UploadBB;