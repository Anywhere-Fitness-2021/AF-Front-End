function Class(props) {
    const { name, type, startTime, duration, intensityLevel, location, attendees, maxClassSize, addToMyListInstructor, addToMyListClient, updateAClass, deleteAClass } = props;

    const addToMyListButton = () => {
        if (JSON.parse(window.localStorage.getItem('role')) === 'Instructor') {
            return <button id='insAdd-option' onClick={addToMyListInstructor}>Teach Class</button>;
        } else {
            return <button id='cliAdd-option' onClick={addToMyListClient}>Reserve Class</button>;
        }
    }

    const updateAClassButton = () => {
        if (JSON.parse(window.localStorage.getItem('role')) === 'Instructor') {
            return <button id='edit-option' onClick={updateAClass}>Edit Class</button>;
        } else {
            return null;
        }
    }

    const deleteAClassButton = () => {
        if (JSON.parse(window.localStorage.getItem('role')) === 'Instructor') {
            return <button id='delete-option' onClick={deleteAClass}>Delete Class</button>;
        } else {
            return null;
        }
    }

    return (
        <div className='class-data'>
            <h3>Name: {name}</h3>
            <p>Type: {type}</p>
            <p>Start Time: {startTime}</p>
            <p>Duration: {duration}</p>
            <p>Intensity Level: {intensityLevel}</p>
            <p>Location: {location}</p>
            <p>Attendees: {attendees}</p>
            <p>Max Class Size: {maxClassSize}</p>
            {addToMyListButton()}
            {updateAClassButton()}
            {deleteAClassButton()}
        </div>
    );
}

export default Class;
