import React from 'react'
const ContactBackgroundImage = (props) => {
    return (
        <div className='Contactbackground-container' style={{background:`url(${props.ContactbgImage}) no-repeat bottom center/cover`,height:"100vh"}}>
        <div className='contact-content-heading'>
            <h1 className='contact-heading-main'>{props.heading}</h1>
            <p>{props.text}</p>
            <p>{props.tex}</p>
            <p>{props.ph}</p>
        </div>
        </div>
    )
}
export default ContactBackgroundImage