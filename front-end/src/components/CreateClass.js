import React, {useState} from 'react';

import "../styling/createclass.css"

const initialState = {
    isLoading: false,
    error: 'Test error message.',
    activeUser: {
        role:'Client',
        username: 'yogafan123'
    },
    classes: [
        {
            classId: '1',
            name: 'Yoga 4 Everyone!',
            type: 'Yoga',
            startTime: '6:00',
            duration: '30 minutes',
            intenstityLevel: 'Beginner',
            location: 'Los Angeles',
            attendees: '16',
            maxClassSize: '20'
        },
        {
            classId: '2',
            name: 'Pilates 4 Enthusiasts!',
            type: 'Pilates',
            startTime: '18:00',
            duration: '60 minutes',
            intenstityLevel: 'Intermediate',
            location: 'Miami',
            attendees: '14',
            maxClassSize: '20'
        }
    ]
}

const CreateClass = () => {

    const [classes, setClasses] = useState([]);
    const [newClass, setNewClass] = useState(initialState);

    const handleChange = e => {
        const {name, value} = e.target;
        
        setNewClass({
            ...newClass, [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        setClasses([
            ...classes, newClass
        ]);


        // axiosWithAuth()
        //     .post()
        //     .then()
        //     .catch();
    };

    const clearForm = e => {
        setNewClass(initialState)
    }

    return (
        <div>
            <classdiv id="class-div">
                <h2>Create A New Class</h2>
                <form id="class-form" >
                    <label htmlFor="name"/>Name:
                        <input id=""
                            name="name"
                            type="text"
                            value={newClass.name}
                            placeholder="class name..."
                            onChange={handleChange}
                        />
                    <label htmlFor="type"/>Type:
                        <input id=""
                            name="type"
                            type="text"
                            value={newClass.type}
                            placeholder="class type..."
                            onChange={handleChange}
                        />
                    <label htmlFor="starttime"/>Start Time:
                        <input id=""
                            name="starttime"
                            type="text"
                            value={newClass.starttime}
                            placeholder="what time does class begin..."
                            onChange={handleChange}
                        />
                    <label htmlFor="duration"/>Duration:
                        <input id=""
                            name="duration"
                            type="text"
                            value={newClass.duration}
                            placeholder="how long does class last..."
                            onChange={handleChange}
                        />
                    <label htmlFor="intensitylevel"/>Intensity Level:
                        <input id=""
                            name="intensitylevel"
                            type="text"
                            value={newClass.intenstityLevel}
                            placeholder="what is the intensity level..."
                            onChange={handleChange}
                        />
                    <label htmlFor="location"/>Location:
                        <input id=""
                            name="location"
                            type="text"
                            value={newClass.location}
                            placeholder="where will class be held..."
                            onChange={handleChange}
                        />
                    <label htmlFor="attendees"/>Attendees:
                        <input id=""
                            name="attendees"
                            type="text"
                            value={newClass.attendees}
                            placeholder="how many clients are attending..."
                            onChange={handleChange}
                        />
                    <label htmlFor="maxsize"/>Max Size:
                        <input id=""
                            name="maxsize"
                            type="text"
                            value={newClass.maxsize}
                            placeholder="what is the max class size..."
                            onChange={handleChange}
                        />
                    
                    <button onSubmit={handleSubmit}>Create Class</button>
                    <button onSubmit={clearForm}>Clear</button>
                </form>
            </classdiv>
        </div>
    )
}

export default CreateClass;
