import React from 'react';
import { linkedIn, instagram, twitter, facebook } from '../../icons';

const Team = () => {
    return (
        <div className="team">
            <div className="team__text">
                <h1>Meet The Host</h1>
                <p>
                    We Are Sports Performance Trainers Who Are Former D1 Football Players.
                    We Wanted To Share Our Wisdom By Creating A Locker Room Like Atmosphere And
                    That's When Books And Brewskies Was Created.
                    </p>
            </div>
            <div className="team__hosts">
                <div className="team__hosts__host team__hosts__host-1">
                    <div className="team__hosts__content team__hosts__host-1__content">
                        <h1>Christian Backes</h1>
                        <p>Denver, Colorado native. Griz alumni.</p>
                        <div className="team__hosts__social-media">
                            <a href="https://twitter.com/backes07" target="_blank" rel="noopener noreferrer">
                                {twitter}
                            </a>
                            <a href="https://www.facebook.com/backes07/" target="_blank" rel="noopener noreferrer">
                                {facebook}
                            </a>
                            <a href="https://www.instagram.com/christianbackes/" target="_blank" rel="noopener noreferrer">
                                {instagram}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team__hosts__host team__hosts__host-2">
                    <div className="team__hosts__content team__hosts__host-2__content">
                        <h1>Shane Moody</h1>
                        <p>Denver, Colorado native. Griz alumni.</p>
                        <div className="team__hosts__social-media">
                            <a href="https://www.linkedin.com/in/shane-moody-4927b5199/" target="_blank" rel="noopener noreferrer">
                                {linkedIn}
                            </a>
                            <a href="https://www.instagram.com/shanemoody25/" target="_blank" rel="noopener noreferrer">
                                {instagram}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team