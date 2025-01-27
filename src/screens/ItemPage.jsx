import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const ItemPage = ({ suggestions }) => {
  const { state } = useLocation();
  const { image } = state || {};

  if (!image) {
    return (
      <p className="text-center text-red-500 mt-10">
        Görüntü yüklenemedi. Lütfen geri dönün.
      </p>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="flex flex-col items-center justify-center pt-10 px-4">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={image.image}
              alt={image.title || "Item Image"}
              className="w-full h-80 object-cover"
            />
            <button className="absolute top-4 right-4 bg-red-500 text-white py-2 px-4 rounded-full shadow-md border border-red-700 hover:bg-red-600">
              Kaydet
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {image.title || "Untitled"}
            </h2>
            <p className="mt-2 text-gray-600">
              {image.description || "No description available."}
            </p>
            <div className="flex justify-between items-center mt-4 text-gray-600">
              <span>❤️ {image.likes} Likes</span>
              <span>💬 {image.comments} Comments</span>
            </div>
          </div>
        </div>

        {/* Alt kısımda öneriler */}
        <div className="w-full max-w-6xl mt-10">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Daha Fazla Fikir
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suggestions?.map((suggestion, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={suggestion.image}
                  alt={suggestion.title || "Suggestion Image"}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
