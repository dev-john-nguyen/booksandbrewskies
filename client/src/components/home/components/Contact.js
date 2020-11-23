import React from 'react';
import ContactForm from '../../contact/ContactForm';
import axios from 'axios'
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

    onSubmit = async (formValues) => {

        await axios.post('/contact', { ...formValues })
            .then(res => {
                this.setState({ success: true })
            })
            .catch(err => this.setState({ error: true }));
    }

    handleModalRender = () => {
        const { error, success, firstName, lastName } = this.state;

        if (error) {
            const clientErrorDescription = `Looks like we are having problems on our side. I apologize
          for the inconvience. Please feel free to email us at beersandbrewskies@gmail.com.`

            return (
                <Mymodal
                    showValue={true}
                    closeDirect='/'
                    buttonName='Close'
                    title='Oops!'
                    description={clientErrorDescription}
                    svgType="error"
                />
            );
        }

        if (success) {
            const descriptionOrderCompleted = `We will get back to you as soon as possible!`;

            return (
                <Mymodal
                    showValue={true}
                    closeDirect='/'
                    buttonName='OK'
                    title={`Thank You ${firstName} ${lastName}!`}
                    description={descriptionOrderCompleted}
                    svgType="success"
                />
            )
        }

    }

    render() {
        const { loading } = this.state;

        return (
            <>
                {this.handleModalRender()}
                <div className="contact">
                    <div className="contact__content">
                        <div className="contact__content__text">
                            <h1 className="">Contact Us</h1>
                            <p className="">You can ask us anything</p>
                        </div>
                        <ContactForm onSubmit={this.onSubmit} loading={loading} />
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;