import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ProfileSection, ProfileInfo, InfoList, ListItem, ItemSpan, SpanWeb, ProfileSkills, ProfileDesc, Bar, BarTilte, BarPerc, BarParnet, ParnetSpan1, ParnetSpan2, ParnetSpan3, ParnetSpan4,  ProfileTitle, ProfileTitleSpan} from './style';

const Profile = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => {setData(res.data.profile)});
    }, []);
    const profileData = data.map((dataItem) => {
        return (
            <InfoList key={dataItem.id}>
                <ListItem>
                    <ItemSpan>Name</ItemSpan>
                    {dataItem.name}
                </ListItem>
                <ListItem>
                    <ItemSpan>Birthday</ItemSpan>
                    {dataItem.birthday}
                </ListItem>
                <ListItem>
                    <ItemSpan>Address</ItemSpan>
                    {dataItem.address}
                </ListItem>
                <ListItem>
                    <ItemSpan>Phone</ItemSpan>
                    {dataItem.phone}
                </ListItem>
                <ListItem>
                    <ItemSpan>Email</ItemSpan>
                    {dataItem.email}
                </ListItem>
                <ListItem>
                    <ItemSpan>Website</ItemSpan>
                    <SpanWeb>{dataItem.website}</SpanWeb>
                </ListItem>
            </InfoList>
        )
    });
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        axios.get('js/data.json').then(res => {setSkills(res.data.skills)});
    }, []);
    const skillsData = skills.map((skillsItem) => {
        return (
            <div key={skillsItem.id}>
                <Bar>
                    <BarTilte>{skillsItem.html}</BarTilte>
                    <BarPerc>{skillsItem.perc1}</BarPerc>
                    <BarParnet>
                        <ParnetSpan1></ParnetSpan1>
                    </BarParnet>
                </Bar>
                <Bar>
                <BarTilte>{skillsItem.css}</BarTilte>
                    <BarPerc>{skillsItem.perc2}</BarPerc>
                    <BarParnet>
                        <ParnetSpan2></ParnetSpan2>
                    </BarParnet>
                </Bar>
                <Bar>
                <BarTilte>{skillsItem.javascript}</BarTilte>
                    <BarPerc>{skillsItem.perc3}</BarPerc>
                    <BarParnet>
                        <ParnetSpan3></ParnetSpan3>
                    </BarParnet>
                </Bar>
                <Bar>
                <BarTilte>{skillsItem.bootstrap}</BarTilte>
                    <BarPerc>{skillsItem.perc4}</BarPerc>
                    <BarParnet>
                        <ParnetSpan4></ParnetSpan4>
                    </BarParnet>
                </Bar>
            </div>
        )
    })
    return (
        <ProfileSection>
            <div className="container">
                <ProfileInfo>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>Profile</ProfileTitle>
                    {profileData}
                </ProfileInfo>
                
                <ProfileSkills>
                    <ProfileTitle><ProfileTitleSpan>My </ProfileTitleSpan>skills</ProfileTitle>
                    <ProfileDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </ProfileDesc>
                    {skillsData}
                </ProfileSkills>
                
            </div>
        </ProfileSection>
    )
}

export default Profile;