"use client";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";

export default function ChooseImageFile() {
  const [files, setFiles] = useState([] || null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const fileArray = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file), // Preview image URL
    }));
    setFiles((prevFiles) => [...prevFiles, ...fileArray]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    const newFileList = new DataTransfer();
    updatedFiles.forEach((fileData) => newFileList.items.add(fileData.file));
    document.getElementById("fileInput").files = newFileList.files;

  };

  return (
    <div className="w-1/2">
       <label className="block font-medium">Image</label>
      <div className={`${files.length <= 0 ? 'h-52' : ''} border-2  flex flex-col items-center justify-between gap-4 border-dashed border-slate-600 p-4 mt-2 rounded-md`}>
      <div className="w-full float-none">
       
       <input
         id="fileInput"
         onChange={handleFileChange}
         multiple
         name="images"
         type="file"
         className="w-full p-2 rounded-md border-none bg-slate-700 text-xs focus:ring-0 focus:outline-none"
       />
     </div>
     {files.length <= 0 && <h1 className="text-slate-300 text-md">Upload image</h1>}
     <div className="grid grid-cols-3 gap-2 mt-4 mb-2">
       {files.map((fileData, index) => (
         <div key={index} className="rounded-md w-full min-h-32 bg-slate-500 relative group">
           {fileData.file.type.startsWith("image/") ? (
             <img
               src={fileData.preview}
               alt="Preview"
              className="rounded-md object-cover w-full h-40 transition-opacity duration-300 group-hover:opacity-25"
             />
           ) : (
             <p className="text-xs">{fileData.file.name}</p>
           )}
        <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                        className="flex justify-center items-center absolute top-1/2 left-1/2  text-slate-200
               opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               transform -translate-x-1/2 -translate-y-1/2 "
                      >
                        <BiTrash className="duration-300 rounded-full p-2 w-9 h-9
               transform hover:scale-125 scale-100 bg-black opacity-50 hover:opacity-90 "size={20}/>
                      </button>
         </div>
       ))}
     </div>
      </div>
    </div>
  );
}

  //  <div
  //                     className={`${
  //                       index === 0 ? "col-span-2" : ""
  //                     } rounded-md w-full min-h-32 bg-slate-500 relative group`}
  //                     key={index}
  //                   >
          
  //                     <img
                       
  //                       alt={`Image ${index}`}
  //                       className="rounded-md object-cover h-full w-full transition-opacity duration-300 group-hover:opacity-25"
  //                       src={`${image}`}
  //                     />
                      
  //                   </div>
