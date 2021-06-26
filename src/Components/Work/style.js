import styled from 'styled-components';


export const WorkStyle = styled.div `
    padding: 50px 0;
    overflow: hidden;
`
export const WorkTitle = styled.h2 `
    font-size: 30px;
    color: #FF4646
`
export const WorkItem = styled.div `
    width: 31.3333%;
    float: left;
    padding: 40px 20px;
    margin-left: 2%;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
    }

`
export const ItemIcon = styled.i `
    display:  ;
    width: 45px;
    height: 45px;
    border: 1px solid #FF4646;
    border-radius: 50%;
    color: #FF4646;
    background-color: #fff;
    line-height: 45px;
    font-size: 25px;
    transition: all .4s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #FF4646;
        color: #fff;
    }

`
export const ItemTitle = styled.p `
    font-size: 20px;
    font-weight: 600;
    color: #FF4646;
    margin: 25px 0;

`
export const ItemContent = styled.p `
    line-height: 1.7;
    font-weight: bold;
    color: #888;

`