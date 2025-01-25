import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { BASE_URL, IMAGES } from "../service/urls";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) return <p>Bir hata oluştu: {error.message}</p>;

  return (
    <div>
      <Header />
      <div className="flex items-center justify-start h-full pl-16 pt-20">
        <div className="flex space-x-8">
          <span className="text-black text-xl font-medium underline">All</span>
          <span className="cursor-pointer text-gray-700 hover:text-black text-xl font-medium">
            Animals
          </span>
          <span className="cursor-pointer text-gray-700 hover:text-black text-xl font-medium">
            Tattoo
          </span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        {images.map((image) => (
          <img
            key={image.id} // Her resme benzersiz anahtar atıyoruz
            src={image.image} // db.json'daki image URL'si
            alt={image.title || "Pinterest image"} // Resim açıklaması
            style={{
              width: "100%", // Resmin genişliği
              borderRadius: "10px", // Kenarları yuvarlatıyoruz
              objectFit: "cover", // Resim alanını doldurmasını sağlıyoruz
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
