function Class(props) {
    const { name, type, startTime, duration, intensityLevel, location, attendees, maxClassSize } = props;

    return (
        <div className='test-class-data'>
            <h3>Name: {name}</h3>
            <p>Type: {type}</p>
            <p>Start Time: {startTime}</p>
            <p>Duration: {duration}</p>
            <p>Intensity Level: {intensityLevel}</p>
            <p>Location: {location}</p>
            <p>Attendees: {attendees}</p>
            <p>Max Class Size: {maxClassSize}</p>
        </div>
    );
}

export default Class;
