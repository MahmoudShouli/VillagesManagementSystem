import { useState, useContext, createContext } from "react";
import Dashboard from "../Components/Dashboard.jsx";
import AddNewImage from "../Components/AddNewImage.jsx";

export const GalleryContext = createContext();

function Gallery() {
  const [images, setImages] = useState([]);
  const [PopUp, setPopUp] = useState(false);

  return (
    <div className="flex">
      <Dashboard />
      <div className="flex flex-col m-5">
        <button
          className="bg-[#4a5568] hover:bg-[#3e4857] p-2 px-4 rounded-md mb-5 w-fit"
          onClick={() => setPopUp(true)}
        >
          Add New Image
        </button>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-col p-4 bg-[#4a5568] rounded-md break-all"
            >
              <img
                src={image[0]}
                alt="Gallery Image"
                className="w-full h-64 object-cover rounded-md mb-1"
              />
              <p className="w-full">{image[1]}</p>
            </div>
          ))}
        </div>
        <GalleryContext.Provider value={{ images, setImages }}>
          {PopUp && <AddNewImage onClose={() => setPopUp(false)} />}
        </GalleryContext.Provider>
      </div>
    </div>
  );
}

export default Gallery;
