import Dashboard from "../components/Dashboard";
import Map from "../components/Map";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { useQuery, gql } from '@apollo/client';

const GET_OVERVIEW_DATA = gql`
    query GetOverviewData {
        generalInfo {
            villages
            urban
            popSize
            avgArea
        }
        chart {
            age
            gender
            bar
        }
    }
`;

function Overview() {
    const { loading, error, data } = useQuery(GET_OVERVIEW_DATA);

    if (loading) return <p className="text-white">Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error.message}</p>;

    
    const { generalInfo, chart } = data;

    const ageData = {
        labels: ["0-18", "19-35", "36-50", "51-65", "65+"],
        datasets: [
            {
                label: "Age Distribution",
                data: chart.age, 
                backgroundColor: ["#a74c65", "#2f71a3", "#a58c4d", "#3c8489", "#9B59B6"],
            },
        ],
    };

    const genderData = {
        labels: ["Male", "Female"],
        datasets: [
            {
                label: "Gender Ratios",
                data: chart.gender,
                backgroundColor: ["#2f71a3", "#a74c65"],
            },
        ],
    };

    const populationData = {
        labels: ["Jabalia", "Beit Lahia", "Quds", "Shejaiya", "Hebron", "Nablus", "Ramallah", "Beit Jala"],
        datasets: [
            {
                label: "Population",
                data: chart.bar,
                backgroundColor: "rgba(128, 255, 212, 0.5)",
            },
        ],
    };

    return (
        <div className="flex min-h-screen bg-primary">
            <Dashboard />
            <div className="flex-grow p-5">
                <h1 className="text-2xl font-bold text-white mb-4">Overview</h1>

                <div className="bg-secondary rounded-lg shadow-lg p-2">
                    <Map />
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <Card text="Total Number of Villages" number={generalInfo.villages} />
                    <Card text="Total Number of Urban Areas" number={generalInfo.urban} />
                    <Card text="Total Population Size" number={generalInfo.popSize} />
                    <Card text="Average Land Area" number={generalInfo.avgArea} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Chart type="Pie" data={ageData} title="Age Distribution" />
                    <Chart type="Pie" data={genderData} title="Gender Ratios" />
                    <Chart type="Bar" data={populationData} title="Population Distribution" className="col-span-2 h-screen" />
                </div>
            </div>
        </div>
    );
}

export default Overview;
