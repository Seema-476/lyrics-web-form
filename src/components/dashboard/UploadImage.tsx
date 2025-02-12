"use client"; 

import React, { useState } from "react";

const UploadImages = () => {
  const [images, setImages] = useState<{ file: File; url: string; hasError: boolean }[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      hasError: false, 
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleError = (index: number) => {
    setImages((prev) => {
      const updatedImages = [...prev];
      updatedImages[index].hasError = true; 
      return updatedImages;
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <label className="block border border-silver-gray md:p-6 p-3 text-center cursor-pointer rounded-lg hover:border-gray-600">
        <span className="text-black md:text-2xl text-xl">Click to upload images</span>
        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            {!img.hasError ? (
              <img
                src={img.url}
                alt={`Uploaded preview ${index}`}
                className="w-full size-24 object-cover rounded-lg"
                onError={() => handleError(index)} 
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex justify-center items-center text-red-600 font-bold">
                Error
              </div>
            )}
            <button
              className="absolute top-1 right-1 bg-black text-white p-1 rounded-full opacity-75 group-hover:opacity-100"
              onClick={() => removeImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadImages;
