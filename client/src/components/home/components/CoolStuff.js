import React from 'react';
import StarRating from '../../BB/components/StarRating';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { isEmpty } from 'lodash'

class CoolStuff extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bb: [],
      error: false,
      translateX: '0%',
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
    if(this.timerHandle) {
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

      return (
        <div className="slide" style={this.mounted && {
          transform: `translateX(${translateX})`
        }} key={index}>
          <div className="p-2" key={index}>
            <h1 className="mb-4">{title}</h1>
            <Link to={`/bb/${bobj._id}`}>
              <img className="img-fluid rounded shadow mb-3 bb-img-home" src={bobj.imageUrl} alt="beer" style={{ minWidth: '200px' }} />
            </Link>
            <p className="mb-0">{rate}</p>
            <StarRating itemId={bobj._id} setError={() => alert("Sorry, something went wrong.")} />
            <Link to={`/bb/${bobj._id}`} className="view-more">View</Link>
          </div>
        </div>
      )
    })

    return (
      <>
        <div id="chevron-attraction" />
        <div className="pt-6 pb-6 text-center special-events" style={{ color: '#332212', backgroundColor: '#fff' }}>
          <div className="row m-auto mt-6 justify-content-center align-items-center">
            <div className="col">
              <div className="slide-container">
                {error ? <p>Sorry, couldn't load BB's of the month</p> : isEmpty(handleBBRender) ? <p>Loading...</p> : handleBBRender}

              </div>
            </div>
            <div className="col">
              <div className="text-left p-4">
                <h1 style={{ fontSize: '3rem' }}>The Book And Beer Of The Month</h1>
                <div style={{
                  padding: '1rem'
                }}>
                  {error ? <p>Sorry, couldn't load our summary</p> : isEmpty(handleBBRender) ? <p>Loading...</p> : handleBBDesRender}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}


export default CoolStuff;
