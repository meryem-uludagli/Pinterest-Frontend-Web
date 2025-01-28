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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Header />

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative flex flex-col md:flex-row">
          <div className="md:w-2/2">
            <img
              src={image.image}
              alt={image.title || "Item Image"}
              className="w-64 h-auto object-cover"
            />
          </div>
          <div className="p-4 md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {image.title || "Untitled"}
              </h2>
              <p className="mt-2 text-gray-600 text-sm">
                {image.description || "No description available."}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4 text-gray-600 text-xs">
              <span>❤️ {image.likes || 0} Beğeni</span>
              <span>💬 {image.comments || 0} Yorum</span>
            </div>
          </div>
          <button className="absolute top-7 right-5 bg-transparent text-black border border-red-500 text-m px-2 py-1 rounded-xl hover:bg-red-500 hover:text-white transition-colors">
            Kaydet
          </button>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-10">
        <h3 className="text-md font-bold mb-4 text-gray-800">
          Keşfedilecek Daha Fazla Fikir
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggestions?.map((suggestion, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={suggestion.image}
                alt={suggestion.title || "Suggestion Image"}
                className="w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
