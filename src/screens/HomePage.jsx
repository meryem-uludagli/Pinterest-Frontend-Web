import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { BASE_URL, IMAGES } from "../service/urls";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${IMAGES}`);
        setImages(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchImages();
  }, []);

  if (error)
    return (
      <p className="text-red-500 text-center mt-10">
        Bir hata oluştu: {error.message}
      </p>
    );
  const handleImageClick = (image) => {
    navigate("/item", { state: { image } });
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="flex items-center justify-start h-full px-16 pt-20">
        <div className="flex space-x-8">
          <span className="text-black text-xl font-medium underline cursor-pointer">
            All
          </span>
          <span className="cursor-pointer text-gray-700 hover:text-black text-xl font-medium">
            Animals
          </span>
          <span className="cursor-pointer text-gray-700 hover:text-black text-xl font-medium">
            Tattoo
          </span>
        </div>
      </div>

      <div className="px-16 py-10 columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="mb-6 break-inside-avoid rounded-lg overflow-hidden shadow-lg group relative"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.image}
              alt={image.title || "Pinterest image"}
              className="w-full object-cover cursor-pointer hover:opacity-90"
              onClick={() => (window.location.href = `/item/${image.id}`)}
            />

            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <p className="text-sm font-medium truncate">
                {image.title || "Untitled"}
              </p>
              <div className="flex justify-between items-center mt-2 text-xs">
                <span>❤️ {image.likes} Likes</span>
                <span>💬 {image.comments} Comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
