import PropTypes from "prop-types";
import { Pie, Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    Title, 
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Title);

function Chart({ type, data, options, title, className}) {

    const defaultOptions = {
        ...options,
        plugins: {
            ...options?.plugins,
            title: {
                display: !!title, 
                text: title,
                font: {
                    size: 24, 
                },
                color: "white", 
                padding: {
                    top: 10,
                    bottom: 10,
                },
            },
            legend: {
                labels: {
                    color: "gray", 
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className={`bg-secondary p-4 rounded-lg shadow-md mt-5 h-96 ${className}`}>
            {type === "Pie" && <Pie data={data} options={defaultOptions} />}
            {type === "Bar" && <Bar data={data} options={defaultOptions} />}
        </div>
    );
}

Chart.propTypes = {
    type: PropTypes.oneOf(["Pie", "Bar"]).isRequired,
    data: PropTypes.object.isRequired,
    options: PropTypes.object,
    title: PropTypes.string, 
    className: PropTypes.string
};

export default Chart;
