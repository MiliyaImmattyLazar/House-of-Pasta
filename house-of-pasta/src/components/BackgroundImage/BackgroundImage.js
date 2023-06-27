import React from 'react'
import './BackgroundImage.css'
const BackgroundImage = (props) => {
    return (
        <div className='background-container' style={{background:`url(${props.bgImage}) no-repeat bottom center/cover`,height:"100vh"}}>
        <div className='content-heading'>
            <h1 className='heading-main'>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
        </div>
    )
}
export default BackgroundImage