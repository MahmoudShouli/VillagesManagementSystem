import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Village, { VillageContext } from "../Pages/Village";

function AddNewImage({ onClose }) {
  let VillageName = "";
  let Region = "";
  let LandArea = "";
  let Latitude = "";
  let Longitude = "";
  let Categories = "";
  let Photo = null;

  function handleVillageNameChange(event) {
    VillageName = event.target.value;
  }
  function handleRegionChange(event) {
    Region = event.target.value;
  }
  function handleLandAreaChange(event) {
    LandArea = event.target.value;
  }
  function handleLatitudeChange(event) {
    Latitude = event.target.value;
  }
  function handleLongitudeChange(event) {
    Longitude = event.target.value;
  }
  function handleCategoriesChange(event) {
    Categories = event.target.value;
  }
  function handlePhotoChange(event) {
    Photo = event.target.files[0];
  }

  const { VillageList, setVillageList } = useContext(VillageContext);
  const btnClose = () => {
    if (
      !Photo ||
      !VillageName ||
      !Region ||
      !LandArea ||
      !Latitude ||
      !Longitude ||
      !Categories
    )
      return;
    setVillageList([
      ...VillageList,
      [VillageName, Region, LandArea, Latitude, Longitude, Categories, Photo],
    ]);
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
            Village Name:
            <br />
            <input
              type="text"
              className="input-primary-form"
              onChange={handleVillageNameChange}
              required
            />
          </label>
          <label className="w-full text-sm">
            Region/District:
            <br />
            <input
              className="input-primary-form"
              onChange={handleRegionChange}
              required
            />
          </label>
          <label className="w-full text-sm">
            Land Area (sq km):
            <br />
            <input
              className="input-primary-form"
              onChange={handleLandAreaChange}
              required
            />
          </label>
          <label className="w-full text-sm">
            Latitude:
            <br />
            <input
              className="input-primary-form"
              onChange={handleLatitudeChange}
              required
            />
          </label>
          <label className="w-full text-sm">
            Longitude:
            <br />
            <input
              className="input-primary-form"
              onChange={handleLongitudeChange}
              required
            />
          </label>
          <label className="w-full text-sm">
            Upload Image:
            <br />
            <input
              type="file"
              className="input-primary-form"
              onChange={handlePhotoChange}
              required
            />
          </label>
          <label className="w-full text-sm">
            Categories/Tags:
            <br />
            <input
              className="input-primary-form"
              placeholder="e.g., rural, urban"
              onChange={handleCategoriesChange}
              required
            />
          </label>
          <button
            type="submit"
            className="btn-primary-form w-full"
            onClick={btnClose}
          >
            Add Village
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewImage;
