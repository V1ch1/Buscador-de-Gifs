import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import "../css/gifGrid.css";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div>
      <div>
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          </div>
        ) : (
          <div className="divImagesGeneral">
            {images.map((img) => (
              <GifGridItem key={img.id} img={img} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
