import React from 'react'
import './About.css'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import bgImage from '../../assets/images/food.png'
const About = () => {
    return(
        <div>
            <BackgroundImage 
            bgImage = {bgImage}
            heading = {["About us"]}
            text = "Along with great food, you’ll receive a wonderfully warm welcome at House of Pasta where a community feel and sense of fun always fill the dining space. It’s popular, no doubt, so it’s best to reserve a table way ahead of time."
            />
          
        </div>
    )
}
export default About