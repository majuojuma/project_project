import React, { useState, useEffect } from 'react';
import Nav from '../Navigation/Nav';
import axios from 'axios';


const EventStatistics = () => {
    const [crimeevent, setCrimeEvent] = useState(0);
     useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/event/all')

    .then((response)=>{
        
        const filterCrimeEvent = response.data.filter(item => item.event_type === "tukio la uhalifu");
        const total_crime_event = filterCrimeEvent.length;
        setCrimeEvent(total_crime_event);

    })
     })
     const [FireEvent, setFireEvent] = useState(0);
     useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/event/all')
        .then((response)=>{
        const filterFireEvent = response.data.filter(item => item.event_type === "tukio la moto");
            const total_fire_event = filterFireEvent.length;
            setFireEvent(total_fire_event);
        })
     })

     const[SmugglingEvent, setSmugglingEvent] = useState(0);
     useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/event/all')
        .then((response)=>{
            const filterMagendoEvent = response.data.filter(item => item.event_type === "tukio la magendo");
            const total_magendo_event = filterMagendoEvent.length;

            setSmugglingEvent(total_magendo_event)
        })
     })




    return (
        <> 
        <Nav />
        <div className="event-statistics">
            <h2>Event Statistics</h2>
            <div className="card-container">
                <div className="card">
                    <h3>{crimeevent}</h3>
                    <p>Crime Event</p>
                </div>
                <div className="card">
                    <h3>{FireEvent}</h3>
                    <p>Fire Event</p>
                </div>
                <div className="card">
                    <h3>{SmugglingEvent}</h3>
                    <p>Smuggling Event</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default EventStatistics;
