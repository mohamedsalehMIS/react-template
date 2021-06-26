import styled from 'styled-components';

export const SocialSection = styled.div `
    overflow: hidden;
    text-align: center;
`
export const SocialItem = styled.div `
    width: 33.3333%;
    padding: 45px;
    background-color: ${props => props.item === 1 ? '#1877f2' : '' };
    background-color: ${props => props.item === 2 ? '#1da1f2' : '' };
    background-color: ${props => props.item === 3 ? '#e60023' : '' };
    float: left;
`
export const SocialIcon = styled.i `
    color: #fff;
    transition: .7s;
    &:hover {
        transform: rotate(360deg);
    }
`
export const SocialDesc = styled.p `
    color: #fff;
    font-size: 20px;
    font-weight: ${props => props.bold === 'bold' ? 'bold' : ''};
`
