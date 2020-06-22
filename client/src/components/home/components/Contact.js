import React from 'react';
import ContactForm from '../../contact/components/ContactForm';
import { contact } from '../../../services/contact/actions';
import Mymodal from '../../Modal';

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
        return console.log(formValues);
      this.setState({
        loading: true,
        firstName: formValues.firstName,
        lastName: formValues.lastName
      });
  
      contact(formValues)
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
        <div className="pt-6 pb-6 text-center special-events" id="contact" style={{ color: '#332212', backgroundColor: '#fff' }}>
          <div className="row m-auto">
          <div className="col">
              <h1 className="text-center" style={{ fontSize: '3rem' }}>Contact Us</h1>
              <div id="chevron" style={{ width: '100%', top: '20px', minWidth: '200px', maxWidth: '400px' }} />
            </div>
          </div>
          <div className="row m-auto mt-6 align-items-center contact-section">
              <div className="d-block text-white ml-4">
                  <h4 className="mb-4">You can ask us anything</h4>
                <ContactForm onSubmit={this.onSubmit} loading={loading}/>
              </div>
          </div>
        </div>
    )
    }
}

export default Contact;