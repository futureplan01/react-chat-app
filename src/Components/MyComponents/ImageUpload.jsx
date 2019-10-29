import React, {Component} from 'react';
import axios from 'axios';


class ImageUpload extends Component {
    constructor(){
        this.state = {
            file:null
        }
        this.selectedHandler = this.selectedHandler.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);
    }
    SelectedHandler = event =>{
        console.log(event.target.files[0]);
        this.setState({file: event.target.files[0]});
    }
    UploadHandler = () => {
        const fd = new FormData();
        fd.append('image',this.state.file,this.state.file.name);

    }

    render(){
        return (
        <div className="">
            <input type ="file" onChange ={this.selectedHandler}/>
            <button onClick = {this.uploadHandler}/>
        </div>
        );
    }
}