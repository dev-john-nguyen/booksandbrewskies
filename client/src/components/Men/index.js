import React, { useState, useEffect } from 'react';
import UploadBB from './UploadBB';
import Modal from '../Modal';
import axios from 'axios';
import { isEmpty } from 'lodash';
import Spinner from '../spinner';
import EditItem from './EditItem';

const Men = () => {
    const [showUploadBB, setShowUploadBB] = useState(false);
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const [login, setLogin] = useState([localStorage.getItem('password') === 'Bigleftnut' ? true : false, 'Bigleftnut']);
    const [password, setPassword] = useState(localStorage.getItem('password'));
    const [editItem, setEditItem] = useState()

    useEffect(() => {
        if (!login[0]) return;

        setLoading(true);

        async function fetchReviews() {
            let response;
            try {
                response = await axios.get('/men/reviews/get')
            } catch (e) {
                console.log(e)
                setError(true)
            }

            console.log('fetching...')
            setReviews(response.data)
            setLoading(false)
        }

        fetchReviews();

    }, [login]);

    const handleLogin = (e) => {
        e.preventDefault()

        if (password === login[1]) {
            localStorage.setItem('password', login[1]);
            setLogin([true])
        } else {
            alert("incorrect")
        }
    }

    if (!login[0]) return (
        <form onSubmit={handleLogin} style={{
            position: "fixed",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px'
        }}>
            <h1 className="text-center">Only Men</h1>
            <input type="password" className="form-control mt-4" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>
        </form>
    )

    if (error) return (
        <Modal
            showValue={true}
            closeDirect='/'
            buttonName='Close'
            title='Error'
            description='Failed to get reviews'
            svgType="error"
            handleState={() => setError(false)}
        />
    )

    if (loading) return <Spinner />;

    const svg = (
        <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: '40%', top: '40%' }}>
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
    )

    const svgPlus = (
        <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-plus" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
    )


    const mapReviews = reviews.map((item, index) => {
        return (
            <div className="men-reviews m-3 p-2 d-flex align-items-center flex-column" style={{ width: '220px' }} key={index}>
                <div className="men-a" style={{ position: 'relative' }} onClick={() => setEditItem(item)}>
                    <div className='men-edit'>
                        {svg}
                    </div>
                    <img className="img-fluid rounded shadow" src={item.imageUrl} alt={item.name} width='250' height='350' style={{ height: '350px' }} />
                </div>
                <div className="item-content mt-4">
                    <h3>{item.name}</h3>
                    <p>From: {item.description}</p>
                </div>
            </div>
        )
    })

    mapReviews.reverse();

    return (
        <div className="pt-6 pb-6" style={{ color: '#332212', backgroundColor: '#fff' }}>
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col text-center'>
                        <h1>Make Changes</h1>
                    </div>
                </div>
                {!isEmpty(editItem) && <EditItem editItem={editItem} handleClose={() => setEditItem('')} />}
                {showUploadBB && <UploadBB handleClose={() => setShowUploadBB(false)}/>}
                {isEmpty(reviews) ? <div>Loading...</div> :
                    <div className="row m-auto d-flex justify-content-between bb-item-container" style={{ flexWrap: 'wrap' }}>
                        <div className="men-reviews m-3 p-2 d-flex align-items-center flex-column" style={{ width: '220px' }}>
                            <div className="men-a" style={{ position: 'relative' }} onClick={() => setShowUploadBB(true)}>
                                <div className='men-edit'>
                                    {svg}
                                </div>
                                <div className="men-reviews shadow rounded" style={{
                                    width: '200px',
                                    height: '350px',
                                    background: '#eabf00',
                                    margin: 'auto',
                                    position: 'relative'
                                }}> 
                                <div style={{ position: 'absolute', left: '30%', top: '35%'}}>{svgPlus}</div>
                                </div>
                            </div>
                            <div className="item-content mt-4">
                                <h3>Add A New Item</h3>
                            </div>
                        </div>

                        {mapReviews}
                    </div>
                }
            </div>
        </div>
    )
}

export default Men;