import React from 'react'
import { insert_rating } from '../../../services/bb/actions';

class StarRating extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            rating: 0,
            hover: 0,
            error: false
        }
    }

    handleOnClick = (e) => {

        const { itemId, setError } = this.props;

        insert_rating(e.currentTarget.name, itemId)
            .then((obj) => {
                if (obj.err) return setError();
                this.setState({ rating: obj.rating });
            })
            .catch((e) => {
                console.log(e)
                setError();
            });

    }


    render() {

        const { itemId } = this.props;

        const checkMark = (
            <svg className="bi bi-check-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clipRule="evenodd" />
            </svg>
        )

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

        let starArray = [];

        if (this.state.rating === 0) {
            for (let i = 1; i < 6; i++) {
                starArray.push(
                    <a className="p-1 mb-0"
                        key={itemId + i}
                        name={i}
                        onClick={this.handleOnClick}
                        onMouseOver={(e) => this.setState({ hover: parseInt(e.currentTarget.name) })}
                        style={this.state.hover >= i ? { color: '#eabf00' } : {}}
                    >
                        {starSvg}
                    </a>
                )
            }
        } else {

            for (let i = 1; i < 6; i++) {
                if (this.state.rating >= i) {
                    starArray.push(<p className="p-1 mb-0 rated" key={itemId + i}>{fullStarSvg}</p>);
                } else {
                    starArray.push(<p className="p-1 mb-0 rated" key={itemId + i}>{starSvg}</p>);
                }
            }

        }

        return (
            <div className="star d-flex user-star-rating" onMouseLeave={() => this.setState({ hover: 0 })}>
                {starArray}
                {this.state.rating !== 0 && checkMark}
            </div>
        )
    }
}

export default StarRating;