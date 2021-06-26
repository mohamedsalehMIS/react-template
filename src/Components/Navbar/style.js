import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const NavbarSection = styled.div`
    padding: 10px 0;
    background-color: #ffd3d3;
    overflow: hidden;
    position: relative;

`
export const Logo = styled.div`
    width: 50%;
    float: left;

`
export const LogoText = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0;
    color: #fff

`
export const SpanText = styled.span`
    color: #ff4646;
`
export const UlList = styled.ul`
    width: 50%;
    float: right;
    list-style: none;
    padding: 0;
    margin: 20px 0;
`
export const List = styled.li`
    float: left;
    display: inline-block;
    margin: 0 17px;
    font-size: 18px;
    font-weight: bold;
`

export const Anchor = styled.a`
    color: #fff;
    display: block;
    text-decoration: none;
    transition: all .4s ease-in-out;
    
    &:hover {
        color: #ff4646;
        cursor: pointer
    }
`
export const LinkStyle = styled(Link) `
    color: #fff;
    display: block;
    text-decoration: none;
        transition: all .4s ease-in-out;
        
        &:hover {
            color: #ff4646;
            cursor: pointer;
`