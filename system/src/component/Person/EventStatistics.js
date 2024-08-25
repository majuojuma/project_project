// import React, { useState, useEffect } from 'react';
// import Nav from '../Navigation/Nav';
// import axios from 'axios';


// const EventStatistics = () => {
//     const [crimeevent, setCrimeEvent] = useState(0);
//      useEffect(()=>{
//         axios.get('http://localhost:8080/api/v1/event/all')

//     .then((response)=>{
        
//         const filterCrimeEvent = response.data.filter(item => item.event_type === "tukio la uhalifu");
//         const total_crime_event = filterCrimeEvent.length;
//         setCrimeEvent(total_crime_event);

//     })
//      })
//      const [FireEvent, setFireEvent] = useState(0);
//      useEffect(()=>{
//         axios.get('http://localhost:8080/api/v1/event/all')
//         .then((response)=>{
//         const filterFireEvent = response.data.filter(item => item.event_type === "tukio la moto");
//             const total_fire_event = filterFireEvent.length;
//             setFireEvent(total_fire_event);
//         })
//      })

//      const[SmugglingEvent, setSmugglingEvent] = useState(0);
//      useEffect(()=>{
//         axios.get('http://localhost:8080/api/v1/event/all')
//         .then((response)=>{
//             const filterMagendoEvent = response.data.filter(item => item.event_type === "tukio la magendo");
//             const total_magendo_event = filterMagendoEvent.length;

//             setSmugglingEvent(total_magendo_event)
//         })
//      })




//     return (
//         <> 
//         <Nav />
//         <div className="event-statistics">
//             <h2>Event Statistics</h2>
//             <div className="card-container">
//                 <div className="card">
//                     <h3>{crimeevent}</h3>
//                     <p>Crime Event</p>
//                 </div>
//                 <div className="card">
//                     <h3>{FireEvent}</h3>
//                     <p>Fire Event</p>
//                 </div>
//                 <div className="card">
//                     <h3>{SmugglingEvent}</h3>
//                     <p>Smuggling Event</p>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default EventStatistics;

import React, { useState, useEffect } from 'react';
import Nav from '../Navigation/Nav'; // Adjust this path according to your project structure
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Register required components for Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const EventStatistics = () => {
    const [crimeEvent, setCrimeEvent] = useState(0);
    const [fireEvent, setFireEvent] = useState(0);
    const [smugglingEvent, setSmugglingEvent] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/event/all')
            .then((response) => {
                const filterCrimeEvent = response.data.filter(item => item.event_type === "tukio la uhalifu");
                const filterFireEvent = response.data.filter(item => item.event_type === "tukio la moto");
                const filterMagendoEvent = response.data.filter(item => item.event_type === "tukio la magendo");

                setCrimeEvent(filterCrimeEvent.length);
                setFireEvent(filterFireEvent.length);
                setSmugglingEvent(filterMagendoEvent.length);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    // Data for the Bar Chart
    const barChartData = {
        labels: ['Crime Event', 'Fire Event', 'Smuggling Event'],
        datasets: [
            {
                label: 'Number of Events',
                data: [crimeEvent, fireEvent, smugglingEvent],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };

    // Data for the Pie Chart
    const pieChartData = {
        labels: ['Crime Event', 'Fire Event', 'Smuggling Event'],
        datasets: [
            {
                data: [crimeEvent, fireEvent, smugglingEvent],
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
            },
        ],
    };

    // Chart options to reduce scale
    const chartOptions = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <>
            <Nav /> {/* Navigation component */}
            <div className="event-statistics">
                <h2>Event Statistics</h2>
                <div className="card-container">
                    <div className="card">
                        <h3>{crimeEvent}</h3>
                        <p>Crime Event</p>
                    </div>
                    <div className="card">
                        <h3>{fireEvent}</h3>
                        <p>Fire Event</p>
                    </div>
                    <div className="card">
                        <h3>{smugglingEvent}</h3>
                        <p>Smuggling Event</p>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="chart-section">
                    {/* Bar Chart */}
                    <div className="chart-container">
                        <h3>Bar Chart of Event Types</h3>
                        <div className="chart-wrapper">
                            <Bar data={barChartData} options={chartOptions} />
                        </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="chart-container">
                        <h3>Pie Chart of Event Distribution</h3>
                        <div className="chart-wrapper">
                            <Pie data={pieChartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventStatistics;

