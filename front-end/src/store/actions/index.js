import axios from 'axios';

export const FETCH_CLASSES_START = 'FETCH_CLASSES_START';
export const FETCH_CLASSES_SUCCESS = 'FETCH_CLASSES_SUCCESS';
export const FETCH_CLASSES_FAILURE = 'FETCH_CLASSES_FAILURE';
export const fetchClasses = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_CLASSES_START });
        axios
            .get('https://anywherefitness2021.herokuapp.com/api/classes', {
                headers: {
                    Authorization: JSON.parse(window.localStorage.getItem('token'))
                }
            })
            .then(resp => {
                console.log(resp.data);
                dispatch({ type: FETCH_CLASSES_SUCCESS, payload: resp });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: FETCH_CLASSES_FAILURE, payload: err.message });
            });
    };
}
