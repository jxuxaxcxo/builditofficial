import React, { Component } from 'react';
import NavBar from './NavBar';
import logo from './images/logo2.png';
import comunidad from './images/comunidad.jpg';


import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import "./Foro.css"




class Foro extends Component {
    state = {
      username: '',
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: ''
    };
   
    handleChangeUsername = (event) => this.setState({username: event.target.value});
    handleUploadStart = () => this.setState({isUploading: true, progress: 0});
    handleProgress = (progress) => this.setState({progress});
    handleUploadError = (error) => {
      this.setState({isUploading: false});
      console.error(error);
    }
    handleUploadSuccess = (filename) => {
      this.setState({avatar: filename, progress: 100, isUploading: false});
      firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));


      console.log();
      
    };
   
    
    render() {
      return (

        <div>
           <NavBar/>
            <div >

           <img className="comunidad" src={comunidad}></img>


    <div className="uploader">

     <label style={{backgroundColor: 'red', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
    Upload your Project
    <FileUploader
      hidden
      filename = {file=> file.name + "||" + "001"}
      accept="*"
      storageRef={firebase.storage().ref('images')}
      onUploadStart={this.handleUploadStart}
      onUploadError={this.handleUploadError}
      onUploadSuccess={this.handleUploadSuccess}
      onProgress={this.handleProgress}
    />
  </label>


        </div>

       </div>



    </div>
      );
    }
  }
   
  export default Foro;