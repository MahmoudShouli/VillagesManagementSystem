import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { VillageContext, VillageIndex } from "../pages/Village";

// eslint-disable-next-line react/prop-types
function ViewVillage({ onClose }) {
  const { VillageList } = useContext(VillageContext);
  const { Idx } = useContext(VillageIndex);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#37404d] p-5 rounded-md flex flex-col items-center w-1/2">
        <div className="flex items-center justify-between w-full mb-2">
          <h1 className="text-xl font-bold">Village Details</h1>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="flex flex-col w-full">
          <p>Village Name: {VillageList[Idx][0]}</p>
          <p>Region/District: {VillageList[Idx][1]}</p>
          <p>Land Area (sq km): {VillageList[Idx][2]}</p>
          <p>Latitude: {VillageList[Idx][3]}</p>
          <p>Longitude: {VillageList[Idx][4]}</p>
          <p>Tags: {VillageList[Idx][5]}</p>
          <img
            src={VillageList[Idx][6]}
            alt="Village Image"
            className="mt-4 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default ViewVillage;
