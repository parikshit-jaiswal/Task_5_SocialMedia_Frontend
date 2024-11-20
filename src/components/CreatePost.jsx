import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function CreatePost() {
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setImages(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    multiple: true
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-[#2a2a2a] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-[#bbacf2] mb-6">Create post</h2>
        {/* Horizontal line */}
<div className="w-full border-t border-[#bbacf2] mb-6"></div>

        
        <div 
          {...getRootProps()} 
          className={` text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-purple-400 bg-purple-100/10' : 'border-gray-600 hover:border-purple-400'}`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 text-purple-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-purple-300">Drag and drop your photos here</p>
            <button className="bg-purple-300 text-gray-800 px-6 py-2 rounded-md hover:bg-purple-400 transition-colors">
              Select from device
            </button>
          </div>
        </div>

        {images.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            {images.map((file) => (
              <div key={file.name} className="relative">
                <img
                  src={file.preview}
                  alt={file.name}
                  className="w-full h-48 object-cover rounded-lg"
                  onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
                <button
                  onClick={() => setImages(images.filter(image => image !== file))}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CreatePost;















