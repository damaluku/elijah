import React, { useState } from "react";

export default function ImageGallery({ title, lightCategory }) {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="mb-6">
      <h4 className="text-xl font-medium mb-2 text-gray-300 uppercase">
        {title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {lightCategory.map((item, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-medium mb-2 text-gray-300 capitalize">
              {item.title}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {item.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img.src}
                  alt={img.name}
                  className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform h-80 object-cover"
                  onClick={() => setSelectedImg(img.src)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>
            <img
              src={selectedImg}
              alt="Full screen preview"
              className="rounded-lg w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
