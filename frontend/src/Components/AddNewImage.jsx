import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GalleryContext } from "../Pages/Gallery";

function AddNewImage({ onClose }) {
  let ImageURL = "";
  let Description = "";

  function handleImageURLChange(event) {
    ImageURL = event.target.value;
  }
  function handleDescriptionChange(event) {
    Description = event.target.value;
  }

  const { images, setImages } = useContext(GalleryContext);
  const btnClose = () => {
    if (!ImageURL || !Description) return;
    setImages([...images, [ImageURL, Description]]);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#37404d] p-5 rounded-md flex flex-col items-center w-1/2">
        <div className="flex items-center justify-between w-full mb-2">
          <h1 className="text-xl font-bold">Add New Village</h1>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <form className="flex flex-col items-center justify-center w-full">
          <label className="w-full text-sm">
            Image URL:
            <br />
            <input
              type="text"
              className="input-primary-form"
              placeholder="Enter image URL"
              onChange={handleImageURLChange}
              required
            />
          </label>
          <label className="w-full text-sm">
            Description:
            <br />
            <input
              className="input-primary-form"
              placeholder="Enter image description"
              onChange={handleDescriptionChange}
              required
            />
          </label>
          <button
            type="submit"
            className="btn-primary-form w-full"
            onClick={btnClose}
          >
            Add Image
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewImage;
