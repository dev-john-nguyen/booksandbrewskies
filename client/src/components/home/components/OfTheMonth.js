import React from 'react';
import StarRating from '../../BB/components/StarRating';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { isEmpty } from 'lodash'

class OfTheMonth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bb: [],
            error: false,
            translateX: '0%',
            nextButton: false
        }
    }

    componentDidMount() {

        axios.get('/reviews/home')
            .then((obj) => {
                !isEmpty(obj) && this.setState({ bb: obj.data })
            })
            .catch((e) => {
                console.log(e)
                this.setState({ error: true })
            })

        this.mounted = true;

        this.setTimer('-100%');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.translateX !== this.state.translateX) {
            if (this.state.translateX === '-100%') {
                this.setTimer('0%');
            } else {
                this.setTimer('-100%');
            }
        }
    }

    componentWillUnmount() {
        this.mounted = false;
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.clearTimer();
        }
    }

    setTimer = (percent) => {
        // if (this.timerHandle) {
        //   // Exception?
        //   return;
        // }
        // Remember the timer handle
        this.timerHandle = setTimeout(() => {
            this.mounted && this.setState({ translateX: percent });
            this.timerHandle = 0;
        }, 5000);
    };

    clearTimer = () => {
        // Is our timer running?
        if (this.timerHandle) {
            // Yes, clear it
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    };


    render() {
        const { bb, error, translateX } = this.state;

        const handleBBDesRender = bb.map((bobj, index) => {
            let intro;

            if (bobj.type === 'book') {
                intro = `The book of this month is ${bobj.name}! ${bobj.name} was written by ${bobj.description}.`;
            } else {
                intro = `The beer of this week is ${bobj.name}! ${bobj.name} is from ${bobj.description}. `;
            }

            return (
                <p key={index}>
                    {intro}{bobj.bio}{bobj.myReview.comment}
                </p>
            )
        })

        const handleBBRender = bb.map((bobj, index) => {
            let title;
            let rate;

            if (bobj.type === 'book') {
                title = 'Book Of The Month'
                rate = 'Have you read it? Rate it.'
            } else {
                title = 'Beer Of The Week'
                rate = 'Have you tried it? Rate it.'
            }

            var animationClass;
            if (index === 0) {
                if (this.state.nextButton) {
                    animationClass = 'display-none'
                } else {
                    animationClass = 'fadeIn'
                }
            } else {
                if (this.state.nextButton) {
                    animationClass = 'fadeIn'
                } else {
                    animationClass = 'display-none'
                }
            }

            return (
                <div className={`slideshow__slide ${animationClass}`} key={index}>
                    <Link to={`/bb/${bobj._id}`} className="slideshow__link link">
                        <div className="slideshow__img">
                            <img src={bobj.imageUrl} alt="beer" />
                        </div>
                    </Link>
                    <div className="slideshow__rate">{rate}</div>
                    <div className='slideshow__star-rating'>
                        <StarRating itemId={bobj._id} setError={() => alert("Sorry, something went wrong.")} />
                    </div>
                    <button onClick={() => this.setState({ nextButton: this.state.nextButton ? false : true })} className="slideshow__button" >Next</button>
                </div>
            )
        })

        return (
            <div className="of-the-month ">
                <div className="content-items">
                    <div className="content-items__slideshow slideshow">
                        {error ? <p>Sorry, couldn't load BB's of the month</p> : isEmpty(handleBBRender) ? <p>Loading...</p> : handleBBRender}
                    </div>
                </div>
                <div className="content-text">
                    <h1>The Book And Beer Of The Month</h1>
                    {error ? <p>Sorry, couldn't load our summary</p> : isEmpty(handleBBRender) ? <p>Loading...</p> : handleBBDesRender}
                </div>
            </div>
        )
    }
}

export default OfTheMonth;


// style={this.mounted && {
//     transform: `translateX(${translateX})`
// }} 