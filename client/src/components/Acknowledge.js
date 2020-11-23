import React from 'react';

const Acknowledge = ({ setWarning }) => {
    return (
        <div className="acknowledge">
            <div className="acknowledge__header">
                <h1>
                    Please Read And Acknowledge
            </h1>
                <p>
                    We do not condone underage drinking. If you are under the age of 21,
                    please be aware that there are products displayed
                    that are required by law to be 21 or older to be consumed.
                    <br />
                    We use cookies on this site to enhance your user experience.
                    For complete overview of all cookies used, please visit our Private Policy page.
                </p>
            </div>
            <div className="acknowledge__button">
                <button type="button" className="" data-dismiss="alert" onClick={() => {
                    localStorage.setItem('warningModal', 'accept');
                    setWarning(false)
                }}>
                    Got it!
                </button>
            </div>
        </div>
    )
}

export default Acknowledge;