import React from 'react';
import {HomeSection, HomeTitle, SpnaTitle, HomeResume} from './style';
const Home = () => {
    return (
        <HomeSection>
            <div className="clearfix"></div>
            <div className="container">
                <div>
                    <HomeTitle>Hi! I am Mohamed Saleh</HomeTitle>
                    <HomeTitle>I am a FrontEnd <SpnaTitle>developer.</SpnaTitle></HomeTitle>
                    <HomeResume>Up to 20 hours of total battery life
                        Crystal clear calls with dual-mic ENC
                        Auto pair and auto-connect
                        Smart in-ear detection feature
                        Great sound with 14.2mm driver and AAC codec</HomeResume>
                </div>
            </div>
        </HomeSection>
    )
}

export default Home;