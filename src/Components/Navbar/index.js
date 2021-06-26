import React from 'react';

import {NavbarSection, Logo, LogoText, SpanText, UlList, List, Anchor, LinkStyle} from './style.js';

const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Klar <SpanText>Tech.</SpanText></LogoText>
                </Logo>
                <UlList>
                    <List><LinkStyle to='/' style={{textDecoration: 'none'}}>Home</LinkStyle ></List>
                    <List><Anchor>Work</Anchor></List>
                    <List><Anchor>Portfolio</Anchor></List>
                    <List><Anchor>Resume</Anchor></List>
                    <List><Anchor>About</Anchor></List>
                    <List><LinkStyle to='/contact' style={{textDecoration: 'none'}}>Contact</LinkStyle></List>
                </UlList>
            </div>
        </NavbarSection>
        /* <div>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
        </div> */
    )
}

export default Navbar;