import Dashboard from "../components/Dashboard";
import Map from "../components/Map";
import Card from "../components/Card";
import Chart from "../components/Chart";

function Overview() {

    const ageData = {
        labels: ["0-18", "19-35", "36-50", "51-65", "65+"],
        datasets: [
            {
                label: "Age Distribution",
                data: [55, 49, 44, 24, 15],
                backgroundColor: ["#a74c65","#2f71a3","#a58c4d","#3c8489","#9B59B6"], 
            },
        ],
    }

    const genderData = {
        labels: ["Male", "Female"],
        datasets: [
            {
                label: "Gender Ratios",
                data: [65, 35],
                backgroundColor: ["#2f71a3","#a74c65"], 
            },
        ],
    }


    const popultionData = {
        labels: ["Jabalia", "Beit Lahia", "Quds", "Shejaiya", "Hebron", "Nablus", "Ramallah", "Beit Jala"],
        datasets: [
            {
                label: "Population",
                data: [50000, 30000, 20000, 40000, 250000, 150000, 100000, 25000],
                backgroundColor: "rgba(128, 255, 212, 0.5)"
            },
        ],
    };


    return (
        <div className="flex min-h-screen bg-primary">
            <Dashboard />
            <div className="flex-grow p-5 ml-80">
                <h1 className="text-2xl font-bold text-white mb-4">Overview</h1>

                <div className="bg-secondary rounded-lg shadow-lg p-2">
                    <Map />
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <Card text="Total Number of Villages" number={8} />
                    <Card text="Total Number of Urban Areas" number={3} />
                    <Card text="Total Population Size" number={660000} />
                    <Card text="Average Land Area" number={"11.88 sq km"} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Chart type="Pie" data={ageData} title="Age Distribution" />
                    <Chart type="Pie" data={genderData} title="Gender Ratios" />
                    <Chart type="Bar" data={popultionData} title="" className="col-span-2 h-screen"/>
                </div>

            </div>
        </div>
    );
}

export default Overview;
