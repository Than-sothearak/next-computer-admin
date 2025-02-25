"use client";
import { useState } from "react";

export default function ChooseImageFile() {
  const [files, setFiles] = useState([]);

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
    <div>
      <div>
        <label className="block font-medium">Image</label>
        <input
          id="fileInput"
          onChange={handleFileChange}
          multiple
          type="file"
          className="w-full p-2 rounded-md bg-slate-700 border-none border-white text-xs focus:ring-0 focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4 mb-2">
        {files.map((fileData, index) => (
          <div key={index} className="relative">
            {fileData.file.type.startsWith("image/") ? (
              <img
                src={fileData.preview}
                alt="Preview"
                className="w-full h-auto rounded-md"
              />
            ) : (
              <p className="text-xs">{fileData.file.name}</p>
            )}
            <button
              type="button"
              className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
              onClick={() => handleRemoveFile(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
