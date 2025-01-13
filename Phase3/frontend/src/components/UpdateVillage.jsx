import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { VillageContext, VillageIndex } from "../pages/Village";
import { updateVillage } from "../api/apiVillage";

// eslint-disable-next-line react/prop-types
function UpdateVillage({ onClose }) {
  const { VillageList, setVillageList } = useContext(VillageContext);
  const { Idx } = useContext(VillageIndex);
  let VillageName = VillageList[Idx][0];
  let Region = VillageList[Idx][1];
  let LandArea = VillageList[Idx][2];
  let Latitude = VillageList[Idx][3];
  let Longitude = VillageList[Idx][4];
  let Photo = VillageList[Idx][5];
  let Categories = VillageList[Idx][6];
  let NameUpdated = VillageList[Idx][0];

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
  function handlePhotoChange(event) {
    Photo = event.target.files[0];
  }

  const btnClose = (e) => {
    if (!Photo || !VillageName || !Region) return;
    VillageList[Idx] = [
      VillageName,
      Region,
      LandArea,
      Latitude,
      Longitude,
      Categories,
      Photo.name,
    ];
    setVillageList(VillageList);
    updateVillage(
      NameUpdated,
      VillageName,
      Region,
      LandArea,
      Latitude,
      Longitude,
      Photo.name,
      Categories
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#37404d] p-5 rounded-md flex flex-col items-center w-1/2">
        <div className="flex items-center justify-between w-full mb-2">
          <h1 className="text-xl font-bold">Update Village</h1>
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
              defaultValue={VillageName}
              required
            />
          </label>
          <label className="w-full text-sm">
            Region/District:
            <br />
            <input
              className="input-primary-form"
              onChange={handleRegionChange}
              defaultValue={Region}
              required
            />
          </label>
          <label className="w-full text-sm">
            Land Area (sq km):
            <br />
            <input
              className="input-primary-form"
              onChange={handleLandAreaChange}
              defaultValue={LandArea}
              required
            />
          </label>
          <label className="w-full text-sm">
            Latitude:
            <br />
            <input
              className="input-primary-form"
              onChange={handleLatitudeChange}
              defaultValue={Latitude}
              required
            />
          </label>
          <label className="w-full text-sm">
            Longitude:
            <br />
            <input
              className="input-primary-form"
              onChange={handleLongitudeChange}
              defaultValue={Longitude}
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
          <button
            type="submit"
            className="btn-primary-form w-full"
            onClick={btnClose}
          >
            Update Village
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateVillage;
