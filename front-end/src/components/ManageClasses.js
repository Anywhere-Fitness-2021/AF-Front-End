import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Class from './Class';
import { fetchClasses } from '../store';

const ManageClasses = (props) => {
    const { fetchClasses } = props;

    const history = useHistory();

    useEffect(() => {
        fetchClasses();
    }, [fetchClasses]);

    const routeToLogin = () => {
        window.localStorage.clear('token')
        window.localStorage.clear('username');
        window.localStorage.clear('role');
        history.push('/login');
    }

    return (
        <div className='manage-classes-container'>
            {props.isLoading ? 'Loading...' : null} <br/>
            {props.error ? <p style={{ color: 'red', fontWeight: 'bold' }}>{props.error}</p> : null} <br/>
            <p>--- Welcome {window.localStorage.getItem('username')}! ---</p>
            <p>Role: {window.localStorage.getItem('role')}</p>
            <button id='signout-button' onClick={routeToLogin}>Sign Out</button><br/><br/>
            &nbsp;&nbsp;&nbsp;List of all our Classes: <br/>
            <div className='classes-container'>
                {props.classes.map(item => (
                    <Class key={item.ClassId} name={item.Name} type={item.Type} startTime={item.StartTime} duration={item.Duration} intensityLevel={item.IntensityLevel} location={item.Location} attendees={item.Attendees} maxClassSize={item.MaxClassSize} />
                ))}    
            </div>        
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
