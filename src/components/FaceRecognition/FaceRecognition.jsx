import React from 'react';
import './FaceRecognition.css' 

const FaceRecognition = ({imageUrl, boxes}) => {
  return (
    <div className='mx-auto center'>
      <div style={{position: "relative"}}>
        <img id='inputImage' src={imageUrl} alt="my_photo" width='500px' height='auto'/>
        { 
          boxes.map((box, i) => {
            const { topRow, rightCol, bottomRow, leftCol } = box;
            return  (<div key={i} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>);
          })
        }
      </div>
    </div>
  );
};

export default FaceRecognition;
