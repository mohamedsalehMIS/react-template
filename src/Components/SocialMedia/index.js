import React, { Component } from 'react';
import axios from 'axios';

import {SocialSection, SocialItem, SocialIcon, SocialDesc} from './style';
class SocialMedia extends Component {
    state = {
        social : []
    }
    componentDidMount () {
        axios.get('js/data.json')
        .then(res => {
            this.setState({social : res.data.social})
        })
    }
    render () {
        const {social} = this.state;
        const SocialData = social.map((socialItem) => {
            return (
                <SocialItem item={socialItem.id} key={socialItem.id}>
                    <SocialIcon className={socialItem.icon}></SocialIcon>
                    <SocialDesc bold='bold'>{socialItem.title}</SocialDesc>
                    <SocialDesc>{socialItem.body}</SocialDesc>
                </SocialItem>
            )
        })
        return (
            <SocialSection>
                {SocialData}
                {/* <SocialItem>
                    <SocialIcon></SocialIcon>
                    <SocialDesc>Follow Me On Facebook</SocialDesc>
                    <SocialDesc>Social Facebook</SocialDesc>
                </SocialItem>
                <SocialItem>
                    <SocialIcon></SocialIcon>
                    <SocialDesc>Follow Me On Facebook</SocialDesc>
                    <SocialDesc>Social Facebook</SocialDesc>
                </SocialItem>
                <SocialItem>
                    <SocialIcon></SocialIcon>
                    <SocialDesc>Follow Me On Facebook</SocialDesc>
                    <SocialDesc>Social Facebook</SocialDesc>
                </SocialItem> */}
            </SocialSection>
        )
    }
}

export default SocialMedia;