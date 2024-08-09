import React, { useState } from 'react';
import Nav from '../Navigation/Nav';

const ReportGenerator = () => {
    const [events] = useState([
        // Sample data for events
        { id: 1, date: '2024-01-01', status: 'addressed' },
        { id: 2, date: '2024-01-02', status: 'not addressed' },
        { id: 3, date: '2024-02-01', status: 'addressed' },
        // Add more sample data as needed
    ]);
    const [reportData, setReportData] = useState({
        dailyAverage: 0,
        monthlyAverage: 0,
        yearlyAverage: 0,
        addressedCount: 0,
        notAddressedCount: 0,
    });

    const calculateReport = () => {
        const currentDate = new Date();
        const eventsByYear = events.filter(event => new Date(event.date).getFullYear() === currentDate.getFullYear());
        const eventsByMonth = eventsByYear.filter(event => new Date(event.date).getMonth() === currentDate.getMonth());
        const eventsByDay = eventsByMonth.filter(event => new Date(event.date).getDate() === currentDate.getDate());

        const addressedCount = eventsByYear.filter(event => event.status === 'addressed').length;
        const notAddressedCount = eventsByYear.filter(event => event.status === 'not addressed').length;

        setReportData({
            dailyAverage: eventsByDay.length,
            monthlyAverage: eventsByMonth.length / new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(),
            yearlyAverage: eventsByYear.length / 12,
            addressedCount,
            notAddressedCount,
        });
    };

    return (
      <><Nav />
        <div className="report-generator">
            <h1>Event Report Generator</h1>
            <button onClick={calculateReport}>Generate Report</button>
            <div className="report-data">
                <h2>Report Data</h2>
                <p>Daily Average Events: {reportData.dailyAverage}</p>
                <p>Monthly Average Events: {reportData.monthlyAverage.toFixed(2)}</p>
                <p>Yearly Average Events: {reportData.yearlyAverage.toFixed(2)}</p>
                <p>Addressed Events: {reportData.addressedCount}</p>
                <p>Not Addressed Events: {reportData.notAddressedCount}</p>
            </div>
        </div>
        </>
    );
};

export default ReportGenerator;
