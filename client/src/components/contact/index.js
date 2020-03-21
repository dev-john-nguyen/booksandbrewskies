import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import { contact } from '../../services/contact/actions';
import Mymodal from '../Modal';
import {Modal} from 'react-bootstrap';
import history from '../../history';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      success: false,
      duplicate: false,
      firstName: '',
      lastName: ''
    };
  }

  onSubmit = formValues => {

    this.setState({
      loading: true,
      firstName: formValues.firstName,
      lastName: formValues.lastName
    });

    this.props.contact(formValues)
      .then(res => this.setState({success: true}))
      .catch(err => this.setState({ error: true }));
  }

  render() {
    const {error, success, loading, firstName, lastName} = this.state;
    if(error){
      const clientErrorDescription = `Looks like we are having problems on our side. I apologize
      for the inconvience. Please feel free to email us at beersandbrewskies@gmail.com.`

      return (
            <Mymodal
            showValue={true}
            closeDirect = '/'
            buttonName = 'Close'
            title='Oops!'
            description= {clientErrorDescription}
            svgType="error"
            />
      );
    }

    if(success){
      const descriptionOrderCompleted = `We will get back to you as soon as possible!`;

      return(
        <Mymodal
        showValue={true}
        closeDirect = '/'
        buttonName = 'OK'
        title={`Thank You ${firstName} ${lastName}!`}
        description= {descriptionOrderCompleted}
        svgType="success"
        />
      )
    }

      return (
        <Modal show={true}
          onHide={() => history.push('/')}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >
          <Modal.Header closeButton>
            <Modal.Title>
              Say Or Ask Us Anything
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactForm onSubmit={this.onSubmit} loading={loading}/>
          </Modal.Body>
        </Modal>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     contacted: state.contact.contacted,
//     contactInfo: state.contact.contactInfo
//   }
// };


export default connect(null,{ contact })(Contact);
