import { useEffect } from 'react';
import { connect } from 'react-redux';

import Class from './Class';
import { fetchClasses } from '../store';

const ManageClasses = (props) => {
    const { fetchClasses } = props;

    useEffect(() => {
        fetchClasses();
    }, [fetchClasses]);

    return (
        <div className='classes-container'>
            <br/>
            {props.isLoading ? 'Loading...' : '---Not loading at the moment---'} <br/>
            {props.error ? <p style={{ color: 'red', fontWeight: 'bold' }}>{props.error}</p> : '---No error to display at the moment---'} <br/><br/>
            ---The current active user is--- <br/>
            Username: {props.activeUser.Username} <br/>
            Role: {props.activeUser.Role} <br/><br/>
            ---List of all classes--- <br/>
            {props.classes.map(item => (
                <Class key={item.ClassId} name={item.Name} type={item.Type} startTime={item.StartTime} duration={item.Duration} intensityLevel={item.IntensityLevel} location={item.Location} attendees={item.Attendees} maxClassSize={item.MaxClassSize} />
            ))}            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.IsLoading,
        error: state.Error,
        activeUser: state.ActiveUser,
        allUsers: state.AllUsers,
        classes: state.Classes
    };
}

export default connect(mapStateToProps, { fetchClasses })(ManageClasses);
