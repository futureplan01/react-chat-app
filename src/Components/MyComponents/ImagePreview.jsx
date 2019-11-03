import React, { Component } from "react";
import FormData from 'form-data';

class ImagePreview extends Component {

    constructor(){
      super();
      this.previewProfileImage = this.previewProfileImage.bind(this);
      this.clickButton = this.clickButton.bind(this);     
    }
    
    previewProfileImage(uploader){
    
        let imgBtn = document.querySelector(".img-btn");   
        
        //ensure a file was selected 
        if (imgBtn.files && imgBtn.files[0]) {
            let imageFile = imgBtn.files[0];
            let reader = new FileReader();    
            reader.onload = function (e) {
                //set the image data as source
                document.querySelector('.profile-pic').setAttribute('src', e.target.result);
            }

            reader.readAsDataURL(imageFile);
            console.log(imageFile);
            const fd = new FormData();
            fd.append('myImage',imageFile);
            console.log(fd);
            this.props.getImageFile(fd);
        }
     
    }
    
     clickButton(){
        document.querySelector(".img-btn").click();
    }   
    
  render(){
      return(
        <div>
          
            <div className = "profile-container">
                  <img className = "profile-pic" alt="default pic"  src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" onClick = {this.clickButton}/>
            </div>

            <input className = "img-btn" type = "file" name = "myImage" placeholder = "Photo" required = "" capture onChange = {this.previewProfileImage}/>
          
        </div>  
     );
  }
} 

export default ImagePreview;