import styled from "styled-components";

export const PortfolioSection = styled.div `
    padding: 50px 0;
    overflow: hidden;
    text-align: center;

`
export const PortfolioTitle = styled.h2 `
    font-weight: 500;
    font-size: 35px;
    color: #FF4646;
    margin:0 0 30px 0;

`
export const PortfolioDesc = styled.p `
    color: #3b434c;
    margin-bottom: 40px;
    line-height: 1.7;
`
export const PortfolioItem = styled.div `
    width: 31.33333%;
    float: left;
    margin-left: 1.3333%;
    margin-bottom: 15px;
    overflow: hidden;
    position: relative;
    &:hover > div {
        opacity: 1;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const ItemImg = styled.img `
    width: 100%;
    height: 350px;
    border-radius: 5px;
`
export const ItemOver = styled.div  `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(255 211 211 / 60%);
    border-radius: 5px;
    opacity: 0;
    transition: all .4s ease-in-out;
`
export const ItemTitle = styled.h3 `
    color: #fff;
    font-weight: 500;
    font-size: 30px;
    margin: 50px 0 0 0;

`
export const ItemCont = styled.p `
    color: #fff;
    line-height: 1.3;
    padding: 0px 35px;
    margin-top: 77px;
`
export const ItemBtn = styled.button `
    background-color: #FFD3D3;
    padding: 12px 20px;
    border: 1px solid #fff;
    margin-top: 30px;                               
    margin-bottom: 30px;
    color: #fff;
    border-radius: 5px;
    transition: all .5s linear;

    &:hover {
        background-color: #fff;
        color: #FF4646;
        cursor: pointer;
    }

`

export const BtnShowMore = styled.button `
    background: transparent;
    padding: 10px 40px;
    border: 1px solid #ccc;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #3b434c;
    border-radius: 7px;
    transition: all .5s linear;
    
    &:hover {
        background-color: #FF4646;
        color: #fff;
        border: 1px solid #FF4646;
    }
`