import React from "react";



const ImageLinkForm = () => {
    return  (
    <div>
        <p className="text-xl mt-1">
            {"Something weird will happen here if you download your picture here"}
        </p>
        <div className="center">
        <div className="p-4 rounded shadow-md">
            <input className="text-xl p-1 w-3/5 m-2" type="text" name="" id="" />
            <button className="transition text-xl w-2/5 transform" type="submit">Detect</button>
        </div>
        </div>
        
    </div>)
        
}

export default ImageLinkForm;