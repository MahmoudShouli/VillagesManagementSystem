/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import Village, { VillageContext, VillageIndex } from "../pages/Village";
import { useMutation, gql } from "@apollo/client";

const UPDATE_DATA = gql`
  mutation UpdateData(
    $Name: String
    $Populationsize: String!
    $Agedistribution: String
    $Genderratios: String
    $Populationgrowth: String!
  ) {
    updateData(
      Name: $Name
      Populationsize: $Populationsize
      Agedistribution: $Agedistribution
      Genderratios: $Genderratios
      Populationgrowth: $Populationgrowth
    ) {
      Name
      Populationsize
      Agedistribution
      Genderratios
      Populationgrowth
    }
  }
`;

function UpdateData({ onClose }) {
  const { VillageList, setVillageList } = useContext(VillageContext);
  const { Idx } = useContext(VillageIndex);
  let PopulationSize = VillageList[Idx][7];
  let AgeDistribution = VillageList[Idx][8];
  let GenderRatios = VillageList[Idx][9];
  let PopulationGrowthRate = VillageList[Idx][10];

  const [updateData] = useMutation(UPDATE_DATA);

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

  const btnClose = (e) => {
    // eslint-disable-next-line no-undef
    if (
      !PopulationSize ||
      !AgeDistribution ||
      !GenderRatios ||
      !PopulationGrowthRate
    )
      return;
    setVillageList((prev) => {
      prev[Idx][7] = PopulationSize;
      prev[Idx][8] = AgeDistribution;
      prev[Idx][9] = GenderRatios;
      prev[Idx][10] = PopulationGrowthRate;
      return prev;
    });
    updateData({
      variables: {
        Name: VillageList[Idx][0],
        Populationsize: PopulationSize,
        Agedistribution: AgeDistribution,
        Genderratios: GenderRatios,
        Populationgrowth: PopulationGrowthRate,
      },
    });
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
