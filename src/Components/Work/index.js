import React, { Component } from 'react';
import axios from 'axios';
import {WorkStyle, WorkTitle, WorkItem, ItemIcon, ItemTitle, ItemContent} from './style';
class Work extends Component {
    state = {
        works: []
    }
    componentDidMount() {
        axios.get('js/data.json').then(res => {this.setState({works: res.data.works})});
    }
    render () {

        const {works} = this.state;
        const worksList = works.map((workItem) => {
            return(
                <WorkItem key={workItem.id}>
                        <ItemIcon className={workItem.icon_name}></ItemIcon>
                        <ItemTitle>{workItem.title}</ItemTitle>
                        <hr />
                        <ItemContent>{workItem.body}</ItemContent>
                </WorkItem>
            )
        })
        return (
            <WorkStyle>
                <div className="container">
                    <WorkTitle>My Work</WorkTitle>
                    {/* Json data */}
                    {worksList}
                    {/* <WorkItem>
                        <ItemIcon className="fa fa-facebook"></ItemIcon>
                        <ItemTitle>Mobile UX</ItemTitle>
                        <hr />
                        <ItemContent>this is a resume about mobile ux and development apps.</ItemContent>
                    </WorkItem>
                    <WorkItem>
                        <ItemIcon><i className="fa fa-whatsapp"></i></ItemIcon>
                        <ItemTitle>Mobile UX</ItemTitle>
                        <hr />
                        <ItemContent>this is a resume about mobile ux and development apps.</ItemContent>
                    </WorkItem>
                    <WorkItem>
                        <ItemIcon><i className="fa fa-twitter"></i></ItemIcon>
                        <ItemTitle>Mobile UX</ItemTitle>
                        <hr />
                        <ItemContent>this is a resume about mobile ux and development apps.</ItemContent>
                    </WorkItem> */}
                </div>
            </WorkStyle>
        )
    }
}

export default Work;