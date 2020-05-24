
import React, { Component } from 'react'
import Modal from './Modal';

export default class Timer extends Component {
    state = {
        minutes: 0,
        seconds: 10,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const warningText = `Please be aware that there are 
        products displayed that are required by law to be 21 or older to be consumed.
        We also use cookies on this site to enhance your user experience.`

        const { minutes, seconds } = this.state
        return (
            <div>
                { minutes === 0 && seconds === 0
                    &&   <Modal
                    showValue={true}
                    closeDirect = '/'
                    buttonName = 'Accept'
                    title='Please Read Before Continuing'
                    description= {warningText}
                    handleState={() => {
                      localStorage.setItem("warningModal", 'accept')
                    }
                  }
                    svgType="warning"
               /> 
                }
            </div>
        )
    }
}