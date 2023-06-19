import React, {useState } from "react";
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
  const [boxes, setBoxes] = useState([]);


const calculateFaceLocation =(data)=>{
  const clarifaiFaces = data.outputs[0].data.regions.map(region=>region.region_info.bounding_box);
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);

  return clarifaiFaces.map(face => {
    return {
    leftCol: face.left_col * width,
    topRow: face.top_row * height,
    rightCol: width - (face.right_col * width),
    bottomRow: height - (face.bottom_row * height)
  }
  })
  
}  
const displayFaceBox = (boxes) => {
  setBoxes(boxes);
}
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
      'Authorization': 'Key 242ff36100b7444996387ad0099f1727'
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
    .then(response => response.json())
    .then(result => displayFaceBox(calculateFaceLocation(result)))
    .catch(error => console.log('error', error));
  
    console.log("Click");
  };

  return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onSubmitButton={onSubmitButton}
      />
      <FaceRecognition boxes={boxes} imageUrl={imageUrl}/> 
      
    </div>
    
  );
}

export default App;
