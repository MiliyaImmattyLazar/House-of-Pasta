import React from 'react'
import './Contact.css'
import ContactBackgroundImage from '../../components/ContactBackgroundImage /ContactBackgroundImage '
import ContactbgImage from '../../assets/images/contact.png'
const Contact = () => {
    return(
        <div>
            <ContactBackgroundImage 
            ContactbgImage = {ContactbgImage}
            heading = {["Contact Us"]}
            text = "ABA Avenue"
            tex="lot 6"
            ph="call : 09090909"
            
            />
          
        </div>
    )
}
export default Contact