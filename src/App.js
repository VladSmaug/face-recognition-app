import React, { useState } from "react";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBg from 'particles-bg';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState(""); 

const returnClarifaiRequestOptions =(imageUrl) =>{

const IMAGE_URL = imageUrl;

const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "8apfo8pwzvgc",
    "app_id": "face-recognition-app"
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": IMAGE_URL
              }
          }
      }
  ]
});
const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + '242ff36100b7444996387ad0099f1727'
  },
  body: raw
};
return requestOptions;
} 

// URL of image to use. Change this to your image.
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmitButton = () => {
    setImageUrl(input);
    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, returnClarifaiRequestOptions(input))
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
    console.log("Click");
  };

  return (
    <div className="App">
      <ParticlesBg className="particles" type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onSubmitButton={onSubmitButton}
      />
      <FaceRecognition imageUrl={imageUrl}/>
    </div>
  );
}

export default App;
