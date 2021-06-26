import styled from 'styled-components';

export const HomeSection = styled.div`
    padding: 100px 0;
    background: url('Images/home-bg.jpg') no-repeat;
    background-position: center;
    background-size: cover;
    text-align: center;
    color: #525252;
    position: relative;
    font-family: sans-serif;
`
export const HomeInfo = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const HomeTitle = styled.h3 `
    font-size: 25px;
    font-weight: bold;
    color: #555
`
export const SpnaTitle = styled.span `
color: #ff4646;
`
export const HomeResume = styled.p `
    width: 60%;
    font-size: 18px;
    color: #616161;
    line-height: 1.6;
    margin-bottom: 20px;
    display: inline-flex;
    align-content: center;
    flex-wrap: nowrap;
`