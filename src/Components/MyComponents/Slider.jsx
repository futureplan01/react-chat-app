import React, {Component} from "react";
import { tsThisType } from "@babel/types";

class Slider extends Component{

    constructor (){
        super();
        this.handleCarousel = this.handleCarousel.bind(this);
    }
    handleCarousel(event){
        const images = document.querySelectorAll(".slide-images");
        const timer = 5000;
        let currentImageCounter = 0;
    
        images[currentImageCounter].classList.add("displayImage");
    
        setInterval(nextImage, timer);
    
        function nextImage(){
    
            images[currentImageCounter].classList.add("stackImage");
    
            /*USED TO MAKE SURE BACKGROUND DOESN'T INTERFERE/SHOW WITH IMAGE TRANSITIONS*/
    
                const tempCounter = currentImageCounter;
    
                setTimeout(function(){
                    images[tempCounter].classList.remove("displayImage");
                },1000);
    
            /*END*/
    
            currentImageCounter = (currentImageCounter + 1) % images.length;
    
            images[currentImageCounter].classList.add("displayImage");
            images[currentImageCounter].classList.remove("stackImage"); 
        }
    }
    componentDidMount(){
        this.handleCarousel();
    }
    render(){
        return (
            <div id = "slider">
        <div className = "slide-images slide1"></div>
        <div className = "slide-images slide2"></div>
        <div className = "slide-images slide3"></div>
        <div className = "slide-images slide4"></div>
        <div className = "slide-images slide5"></div>
        </div>);
    }
}

export default Slider;