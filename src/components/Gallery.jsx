import React, { useEffect, useState } from "react";
import Card from "./Card";

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=1&limit=12")
      .then((response) => response.json())
      .then((data) => setArtworks(data.data))
      .catch((error) => console.error("Error fetching artworks:", error));
  }, []);

  return (
    <div className="gallery">
      {artworks.map((artwork) => (
        <Card key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};

export default Gallery;
