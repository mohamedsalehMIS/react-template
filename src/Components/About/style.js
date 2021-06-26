import styled from 'styled-components';

export const AboutSection = styled.div `
    padding: 50px 0;
    overflow: hidden;
    background-image: url('Images/about-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: right;
`
export const Content = styled.div `
    width: 50%;
    float: right;
    padding: 15px;

    @media (max-width: 768px) {
        width: 100%;
    }
`