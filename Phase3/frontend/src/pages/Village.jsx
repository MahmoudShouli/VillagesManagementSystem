import { useState,  createContext } from "react";
import Dashboard from "../components/Dashboard.jsx";
import AddNewVillage from "../components/AddNewVillage.jsx";
import ViewVillage from "../components/ViewVillage.jsx";
import UpdateVillage from "../components/UpdateVillage.jsx";
import UpdateData from "../components/UpdateData.jsx";

export var VillageContext = createContext();
export var VillageIndex = createContext();

function Village() {
  const [VillageList, setVillageList] = useState([]);
  const [AddVillage, setAddVillage] = useState(false);
  const [ViewVillagePop, setViewVillagePop] = useState(false);
  const [UpdateVillagePop, setUpdateVillagePop] = useState(false);
  const [UpdateDataPop, setUpdateDataPop] = useState(false);
  const [Idx, setIdx] = useState(0);

  return (
    <div className="flex">
      <Dashboard />
      <div className="flex flex-col m-5 flex-grow">
        <button
          className="bg-[#4a5568] hover:bg-[#3e4857] p-2 px-4 rounded-md mb-5 w-fit"
          onClick={() => setAddVillage(true)}
        >
          Add New Village
        </button>
        <div className="grid gap-4 bg-[#2d3748] rounded-md p-4 min-w-full">
          <h1 className="font-bold text-xl">View Village List</h1>
          <input
            type="text"
            placeholder="Search villages..."
            className="input-primary-form bg-[#374151] border-[1px] border-[#4a5568]"
          />
          <div className="flex justify-between items-center">
            <label className="text-sm">
              Sort by:<> </>
              <select
                onChange={(value) => {
                  if (value.target.value.localeCompare("Alphabetical") === 0) {
                    setVillageList(
                      [...VillageList].sort(function (a, b) {
                        return a[0].localeCompare(b[0]);
                      })
                    );
                  } else {
                    setVillageList([...VillageList]);
                  }
                }}
                className="bg-[#374151] border-[1px] border-[#4a5568] text-sm p-1 rounded-md"
              >
                <option>Default</option>
                <option>Alphabetical</option>
              </select>
            </label>
            <div className="flex items-center">
              <p className="text-sm">Page:&nbsp;</p>
              <button className="bg-[#718096] hover:bg-[#677589] rounded-md py-1 px-2 mr-1 text-sm">
                Prev
              </button>
              <button className="bg-[#718096] hover:bg-[#677589] rounded-md py-1 px-2 text-sm">
                Next
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            {VillageList.map((village, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-[#374151] rounded-md p-3 mb-2"
              >
                <p className="text-sm text-gray-200">{village[0]}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      setIdx(index);
                      setViewVillagePop(true);
                    }}
                    className="bg-[#718096] hover:bg-[#677589] rounded-md py-1 px-2 text-sm mr-1"
                  >
                    View
                  </button>
                  <button
                    onClick={() => {
                      setIdx(index);
                      setUpdateVillagePop(true);
                    }}
                    className="bg-[#718096] hover:bg-[#677589] rounded-md py-1 px-2 text-sm mr-1"
                  >
                    Update Village
                  </button>
                  <button
                    onClick={() => {
                      const newVillageList = VillageList.filter(
                        (v, i) => i !== index
                      );
                      setVillageList(newVillageList);
                    }}
                    className="bg-[#718096] hover:bg-[#677589] rounded-md py-1 px-2 text-sm mr-1"
                  >
                    Delete Village
                  </button>
                  <button
                    onClick={() => {
                      setIdx(index);
                      setUpdateDataPop(true);
                    }}
                    className="bg-[#718096] hover:bg-[#677589] rounded-md py-1 px-2 text-sm"
                  >
                    Update Demographic Data
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <VillageContext.Provider value={{ VillageList, setVillageList }}>
          {AddVillage && <AddNewVillage onClose={() => setAddVillage(false)} />}
          <VillageIndex.Provider value={{ Idx, setIdx }}>
            {ViewVillagePop && (
              <ViewVillage onClose={() => setViewVillagePop(false)} />
            )}
            {UpdateVillagePop && (
              <UpdateVillage onClose={() => setUpdateVillagePop(false)} />
            )}
            {UpdateDataPop && (
              <UpdateData onClose={() => setUpdateDataPop(false)} />
            )}
          </VillageIndex.Provider>
        </VillageContext.Provider>
      </div>
    </div>
  );
}

export default Village;
