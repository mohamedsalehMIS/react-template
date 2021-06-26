import React from 'react';
import {ContactSection, ContactTitle, TitleSpan, Form, FormGroup, InputText, InputEmail, InputExp, InputTextarea, InputSubmit  } from './style';
import Footer from './../Footer';
const Contact = () => {
    return (
        <React.Fragment>
            <ContactSection>
                <div className="container">
                    <ContactTitle><TitleSpan>Contact Us</TitleSpan></ContactTitle>
                    <Form>
                        <FormGroup>
                            <InputText type="text" placeholder="Your Name"/>
                            <InputEmail type="email" placeholder="Your Email"/>
                        </FormGroup>
                        <InputExp type="text" className="sub" placeholder="Your Subject"/>
                        <InputTextarea cols="30" rows="10" placeholder="Your Message"></InputTextarea>
                        <InputSubmit type="submit" value="Send Message"/>
                    </Form>
                </div>
            </ContactSection>
            <Footer />
        </React.Fragment>
    )
}

export default Contact;