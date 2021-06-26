import styled from 'styled-components';

export const ProfileSection = styled.div `
    padding: 50px 0;
    overflow: hidden;
`
export const ProfileInfo = styled.div `
    width: 50%;
    float: left;

    &:@media (max-width:768px) {
            width: 100%;
            float: none
            margin-bottom: 20px
        }

`
export const InfoList = styled.ul `
    list-style: none
`
export const ListItem = styled.li `
    margin-bottom: 8px
`
export const ItemSpan = styled.span `
    display: inline-block;
    width: 100px;
    font-weight: bold
`
export const SpanWeb = styled.span `
    font-weight: normal;
    color: #00bcd4
`
export const ProfileSkills = styled.div `
    width: 50%;
    float: left;

    @media (max-width: 768px) {
        width: 100%;
    }
`
export const ProfileDesc = styled.p `
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const Bar = styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const BarTilte = styled.span `
    float: left;
`
export const BarPerc = styled.span `
    float: right;
    margin-right: 100px
`
export const BarParnet = styled.div `
    height: 20px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`
/* export const ParnetSpan = styled.span `
    background: #00bcd4;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
` */
export const ParnetSpan1 = styled.span `
    width: 98%;
    background: #00bcd4;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`
export const ParnetSpan2 = styled.span `
    width: 95%;
    background: #00bcd4;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`
export const ParnetSpan3 = styled.span `
    width: 80%;
    background: #00bcd4;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`
export const ParnetSpan4 = styled.span `
    width: 90%;
    background: #00bcd4;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`
export const ProfileTitle = styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px;
    color: #FF4646
`
export const ProfileTitleSpan = styled.span `
    font-weight: normal;
    color: #545454
`
