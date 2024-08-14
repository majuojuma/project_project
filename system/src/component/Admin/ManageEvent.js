import React, { useState } from 'react';
import Nav from '../Navigation/Nav';

const EventManager = () => {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        setEvents([...events, { ...formData, id: Date.now() }]);
        setFormData({ title: '', date: '', location: '', description: '' });
    };

    const handleDeleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    const handleEditEvent = (id) => {
        const event = events.find(event => event.id === id);
        setFormData(event);
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <><Nav />
        <div className="event-manager" style={{marginLeft:"16%", marginTop:"104px"}}>
            <h1>MANAGER EVENTS</h1>
            <form className="event-form" onSubmit={handleAddEvent}>
                <label>
                    Title:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
                <label>
                    Location:
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </label>
                <button type="submit">Add Event</button>
            </form>

            <div className="event-list">
                {events.map(event => (
                    <div key={event.id} className="event-item">
                        <h2>{event.title}</h2>
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                        <p>{event.description}</p>
                        <button onClick={() => handleEditEvent(event.id)}>Edit</button>
                        <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default EventManager;
