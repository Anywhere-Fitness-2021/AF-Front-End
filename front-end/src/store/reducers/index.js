import {
    FETCH_CLASSES_START,
    FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_FAILURE
} from '../actions';

const initialState = {
    IsLoading: false,
    Error: '',
    ActiveUser: {},
    Classes: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CLASSES_START:
            return {
                ...state,
                IsLoading: true,
                Error: '',
                ActiveUser: state.ActiveUser,
                Classes: []
            };
        case FETCH_CLASSES_SUCCESS:
            return {
                ...state,
                IsLoading: false,
                Error: '',
                ActiveUser: state.ActiveUser,
                Classes: action.payload
            };
        case FETCH_CLASSES_FAILURE:
            return {
                ...state,
                IsLoading: false,
                Error: action.payload,
                ActiveUser: state.ActiveUser,
                Classes: []
            };
        default:
            return state;
    }
};
