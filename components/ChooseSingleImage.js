"use client";
import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export default function ChooseSingleImageFile() {
  const [file, setFile] = useState(null);
  const [editClicked, setEditClicked] = useState(false)
  

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileData = {
        file: selectedFile,
        preview: URL.createObjectURL(selectedFile), // Preview image URL
      };
      setFile(fileData);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    document.getElementById("fileInput").value = null; // Clear the input field
  };

  return (
 
    <div className="">
      {file ? (
        <div className="">
          {file.file.type.startsWith("image/") ? (
            <div className="p-2 rounded-lg bg-slate-700 relative">
              <img
                src={file.preview}
                className="w-44 h-44 object-cover rounded-lg"
              />
                <button onClick={()=> setEditClicked(prev => !prev)}className="p-2 bg-slate-600 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2 ">
            <BiPencil />
          </button>
            </div>
            
          ) : (
            <p></p>
          )}
    
        </div>
      ) : (
        <div className="p-2 rounded-lg bg-slate-700 relative">
          <button onClick={()=> setEditClicked(prev => !prev)}className="p-2 bg-slate-600 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2 ">
            <BiPencil />
          </button>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="w-44 h-44 object-cover rounded-lg"
          />
        </div>
      )}

{editClicked && (
        <div className="container mt-10 mb-10 rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-500 h-full text-white p-6">
           <button onClick={() =>setEditClicked(false)}><IoClose size={28}/></button>
           <div>
           <div>
       
       <input
         id="fileInput"
         onChange={handleFileChange}
         type="file"
         className="w-full mt-2 p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
       />
     </div>
           </div>
        </div>
      )}
      
    </div>
    

  );
}
