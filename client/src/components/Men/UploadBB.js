import React from 'react';
import axios from 'axios';
import Modal from '../Modal';

class UploadBB extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bbImage: '',
            type: '',
            name: '',
            description: '',
            rating: '',
            comment: '',
            error: [false, ''],
            success: false,
            login: [false, 'ShaneHasABigLeftNut'],
            password: ''
        }
    }

    handleInputChanges = (event) => {
        event.target.name === 'bbImage' ? this.setState({ [event.target.name]: event.target.files[0] }) : this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit = async(e) => {
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

        if( type === '' || rating === ''){
            alert("Rating Or Type Is Empty");
            return;
        }

        if (bbImage === '') {
            return this.setState({ error: [true, 'Please Upload Image (jpgm jpeg, png, or gif)'] })
        }

        if (!validImageTypes.includes(bbImage.type)) {
            return this.setState({ error: [true, 'Images Only. Must Be jpg, jpeg, png, or gif'] });
        }

        if(bbImage.size >= 1000000) return this.setState({ error: [true, 'Image is too large. Please upload a smaller file image.'] });

        const dataString = JSON.stringify(dataObj);

        const data = new FormData();
        data.append('bbImage', bbImage);
        data.append('data', dataString);

        const headers = {
            'Content-Type': 'multipart/form-data'
        }

        await axios.post('/upload/reviews', data, {headers:headers})
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
                return this.setState({error: [true, 'Failed To Upload']})
            })
    }

    handleLogin = (e) => {
        e.preventDefault()

        if (this.state.password === this.state.login[1]){
            this.setState({login: [true]})
        }else{
            alert("incorrect")
        }
    }

    render() {
        

        if(!this.state.login[0]){
            return (
                <form onSubmit={this.handleLogin} style={{
                    position: "fixed",
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '320px'
                }}>
                    <h1 className="text-center">Only Men</h1>
                    <input type="password" className="form-control mt-4" name="password" onChange={(e) => this.setState({password: e.target.value})}/>
                    <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>
                </form>
            )
        }

        const { name, description, comment, success, error } = this.state;

        if(error[0]){
            return (
                <Modal
                showValue={true}
                closeDirect='/men/bb/upload'
                buttonName='Close'
                title='Error'
                description={error[1]}
                svgType="error"
                handleState={() => this.setState({error:[false, '']})}
            />
            )
        }

        if(success) {
            return(
                <Modal
                showValue={true}
                buttonName='Close'
                title='Item Added'
                description=""
                svgType="success"
                handleState={() => this.setState({success:false})}
            />
            )
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Upload Book Or Beer</h1>
                        <form className="uploadBB-form" onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                            <div className="form-group">
                                <select name="type" className="form-control" onChange={this.handleInputChanges} required>
                                    <option value="" defaultValue>Type</option>
                                    <option value="beer">Beer</option>
                                    <option value="book">Book</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="bbImage">Upload Book or Brewskie</label>
                                <input type='file' name='bbImage' id="bbImage" className="form-control-file" onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <input type='text' className="form-control" name='name' placeholder='Name' value={name} onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <input type='text' className="form-control" name='description' placeholder='From' value={description} onChange={this.handleInputChanges} required />
                            </div>
                            <div className="form-group">
                                <select name="rating" className="form-control" onChange={this.handleInputChanges}  required>
                                    <option value="" defaultValue>Rating</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea type='text' className="form-control" name='comment' placeholder="Any Comments?" value={comment} onChange={this.handleInputChanges} required />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default UploadBB;