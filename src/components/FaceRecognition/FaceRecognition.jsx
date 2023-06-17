import React from 'react';
import './FaceRecognition.css' 
const FaceRecognition = ({imageUrl, box}) => {
  return (
    <div className='mx-auto center'>
      <div className='absolute mt-2'>
        <img id='inputImage' src={imageUrl} alt="my_photo" width='500px' height='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
    
  );
};

export default FaceRecognition;
