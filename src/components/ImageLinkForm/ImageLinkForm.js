import React from "react";
import "./ImageLinkForm.css"



const ImageLinkForm = ({onInputChange, onSubmitButton}) => {
    return  (
    <div>
        <p className="text-xl m-10">
            {"Download your image URL to detect faces there"}
        </p>
        <div className="center">
        <div className="p-4 rounded shadow-md center gradient">
            <input className="text-xl p-1 w-3/5 m-2" type="text" onChange={onInputChange}/>
            <button className=" text-white font-bold rounded text-xl w-2/5" type="submit" onClick={onSubmitButton}>Detect</button>
        </div>
        </div>
        
    </div>)
        
}

export default ImageLinkForm;
