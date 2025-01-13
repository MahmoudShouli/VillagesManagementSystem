/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { GalleryContext } from "../pages/Gallery";
import { useMutation, gql } from "@apollo/client";

const ADD_GALLERY = gql`
  mutation AddGallery($URL: String!, $Description: String!) {
    addGallery(URL: $URL, Description: $Description) {
      URL
      Description
    }
  }
`;

// eslint-disable-next-line react/prop-types
function AddNewImage({ onClose }) {
  const [createImage] = useMutation(ADD_GALLERY);

  const [ImageURL, setImageURL] = useState("");
  const [desc, setDesc] = useState("");

  const { images, setImages } = useContext(GalleryContext);

  const btnClose = async (e) => {
    if (!ImageURL || !desc) {
      return;
    }
    let tempImg = [ImageURL, desc];

    setImages([...images, tempImg]);

    try {
      await createImage({
        variables: {
          URL: ImageURL,
          Description: desc,
        },
      });
      onClose();
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#37404d] p-5 rounded-md flex flex-col items-center w-1/2">
        <div className="flex items-center justify-between w-full mb-2">
          <h1 className="text-xl font-bold">Add New Image</h1>
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
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
              required
            />
          </label>
          <label className="w-full text-sm">
            Description:
            <br />
            <input
              className="input-primary-form"
              placeholder="Enter image description"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
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
