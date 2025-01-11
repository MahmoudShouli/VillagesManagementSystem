/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { VillageContext, VillageIndex } from "../pages/Village";

function UpdateData({ onClose }) {
  const { VillageList } = useContext(VillageContext);
  const { Idx } = useContext(VillageIndex);
  let PopulationSize = 0;
  let AgeDistribution = [];
  let GenderRatios = [];
  let PopulationGrowthRate = 0;

  function handlePopulationSizeChange(event) {
    PopulationSize = event.target.value;
  }
  function handleAgeDistributionChange(event) {
    AgeDistribution = event.target.value;
  }
  function handleGenderRatiosChange(event) {
    GenderRatios = event.target.value;
  }
  function handlePopulationGrowthRateChange(event) {
    PopulationGrowthRate = event.target.value;
  }

  const btnClose = () => {
    // eslint-disable-next-line no-undef
    if (!PopulationSize || !AgeDistribution || !GenderRatios || !Population)
      return;
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#37404d] p-5 rounded-md flex flex-col items-center w-1/2">
        <div className="flex items-center justify-between w-full mb-2">
          <h1 className="text-xl font-bold">
            Add Demographic Data for {VillageList[Idx][0]}
          </h1>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <form className="flex flex-col items-center justify-center w-full">
          <label className="w-full text-sm">
            Population Size:
            <br />
            <input
              type="text"
              className="input-primary-form"
              onChange={handlePopulationSizeChange}
              defaultValue={PopulationSize}
              required
            />
          </label>
          <label className="w-full text-sm">
            Age Distribution:
            <br />
            <input
              className="input-primary-form"
              onChange={handleAgeDistributionChange}
              defaultValue={AgeDistribution}
              placeholder="e.g., 0-14: 30%, 15-64: 60%, 65+: 10%"
              required
            />
          </label>
          <label className="w-full text-sm">
            Gender Ratios:
            <br />
            <input
              className="input-primary-form"
              onChange={handleGenderRatiosChange}
              defaultValue={GenderRatios}
              placeholder="e.g., Male: 51%, Female: 49%"
              required
            />
          </label>
          <label className="w-full text-sm">
            Population Growth Rate:
            <br />
            <input
              className="input-primary-form"
              onChange={handlePopulationGrowthRateChange}
              defaultValue={PopulationGrowthRate}
              required
            />
          </label>
          <button
            type="submit"
            className="btn-primary-form w-full"
            onClick={btnClose}
          >
            Add Demographic Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateData;
