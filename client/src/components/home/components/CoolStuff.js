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
      error: false
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

  }


  render() {

    const { scrollHeight } = this.props;
    const { bb, error } = this.state;

    const handleBBRender = bb.map((bobj, index) => {
      let title;
      let rate;
      let byFrom;
  
      if(bobj.type === 'book'){
        title = 'Book Of The Month'
        rate = 'Have you read it? Rate it.'
        byFrom = 'By: '
       }else {
         title = 'Beer Of The Week'
         rate = 'Have you tried it? Rate it.'
         byFrom = 'From: '
       }
  
      return (
        <div className="col" key={index}>
        <h1 className="mb-4">{title}</h1>
        <img className={`img-fluid rounded shadow mb-3 ${scrollHeight > .35 && 'animated tada'}`} src={bobj.imageUrl} alt="beer" style={{ minWidth: '200px' }} />
        <h2 className="">{bobj.name}</h2>
        <p>{byFrom}{bobj.description}</p>
        <p className="mb-0">{rate}</p>
        <StarRating itemId={bobj._id} setError={() => alert("Sorry, something went wrong.")} />
        <Link to='/bb' style={{ color: '#007bff' }}>View More...</Link>
      </div>
      )
    })

    return (
      <>
        <div id="chevron-attraction" />
        <div className="pt-6 pb-6 text-center special-events" style={{ color: '#332212', backgroundColor: '#fff' }}>
          <div className="row m-auto">
            <div className="col">
              <h1 className="text-center" style={{ fontSize: '3rem' }}>The B/B Awards</h1>
              <div id="chevron" style={{ width: '100%', top: '20px', minWidth: '200px', maxWidth: '400px' }} />
            </div>
          </div>
          <div className="row m-auto mt-6 justify-content-center align-items-center">
            {error ? <p>Sorry, couldn't load BB's</p> : isEmpty(handleBBRender) ? <p>Loading...</p> : handleBBRender}
          </div>
        </div>
      </>
    )
  }
}


export default CoolStuff;
