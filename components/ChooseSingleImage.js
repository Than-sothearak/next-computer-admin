"use client";
import { useState, useRef } from "react";
import { BiPencil } from "react-icons/bi";

export default function ChooseSingleImageFile({imageUrl}) {
  const [file, setFile] = useState(null);
  const [editClicked, setEditClicked] = useState(false);
  const fileInputRef = useRef(null); // Ref for file input

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const previewURL = URL.createObjectURL(selectedFile);
      setFile({ file: selectedFile, preview: previewURL });
    }
  };

  return (
    <div className="">
      {file ? (
        <div className="p-2 rounded-lg relative">
          {file.file.type.startsWith("image/") && (
            <>
              <img
                src={file.preview}
                className="w-60 h-52 object-cover rounded-lg w"
                alt="Selected file preview"
              />
              <button
                onClick={() => setEditClicked(true)}
                className="p-2 bg-slate-600 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                type="button"
              >
                <BiPencil />
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="p-2 rounded-lg bg-slate-700 relative">
          <button
            onClick={() => setEditClicked(prev => !prev)}
            className="p-2 bg-slate-600 rounded-full absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            type="button"
          >
            <BiPencil />
          </button>
          <img
            src={imageUrl || null}
            className="w-60 h-52 object-cover rounded-lg"
            alt="Default profile"
          />
        </div>
      )}

      {editClicked && (
    
           <div>
             <input
              ref={fileInputRef}
              onChange={handleFileChange}
               name="image"
              type="file"
              accept="image/*"
              className="w-full mt-4 p-2 rounded-md bg-slate-700 border-none text-xs focus:ring-0 focus:outline-none"
            />
          <p className="text-xs italic text-center mt-2">Choose file size below 1MB</p>
           </div>
        
     
      )}
    </div>
  );
}
