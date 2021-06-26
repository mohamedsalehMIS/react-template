import styled from 'styled-components';
export const ContactSection = styled.div `
    padding: 50px 0;
    text-align: center
`
export const ContactTitle = styled.h2 `
    font-size: 60px;
    margin-bottom: 30px;
    

    @media (max-width:575px) {
        font-size: 40px;
    }
`
export const TitleSpan = styled.span `
    font-weight: normal;
    color: #FF4646
`
export const Form = styled.form `
    width: 70%;
    margin: auto;

    @media (max-width:575px) {
        width: 90%;
    }
`
export const FormGroup = styled.div `
    overflow: hidden;
`
export const Input = styled.input `
    outline: 0;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #d8d8d8;
    border: 0;
    border-radius: 5px;
    font-size: 15px;
`
export const InputText = styled(Input) `
    width: 49%;
    float: left;

    @media (max-width:575px) {
        width: 100%;
    }
`
export const InputEmail = styled(Input) `
    width: 49%;
    float: right;

    @media (max-width:575px) {
        width: 100%;
    }
`
export const InputExp = styled(Input) `
    width: 100%
`
export const InputTextarea = styled(Input) `
    width: 100%;
    outline: 0;
    background-color: #d8d8d8;
`
export const InputSubmit = styled(Input) `
    width: 50%;
    background-color: #ffd3d3;
    border: 1px solid #FF5555;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:hover {
        background-color: #FF5555;
    }
    @media (max-width:575px) {
        width: 100%;
    }
`
