import {
    FETCH_CLASSES_START,
    FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_FAILURE,
    FETCH_USER_ROLE_START,
    FETCH_USER_ROLE_SUCCESS,
    FETCH_USER_ROLE_FAILURE,
    FETCH_ALL_USERS_START,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_FAILURE,
    SET_ACTIVE_USER
} from '../actions';

const initialState = {
    IsLoading: false,
    Error: '',
    ActiveUser: {},
    AllUsers: [],
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
                AllUsers: state.AllUsers,
                Classes: []
            };
        case FETCH_CLASSES_SUCCESS:
            return {
                ...state,
                IsLoading: false,
                Error: '',
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: action.payload
            };
        case FETCH_CLASSES_FAILURE:
            return {
                ...state,
                IsLoading: false,
                Error: action.payload,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: []
            };
        case FETCH_USER_ROLE_START:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes                
            }
        case FETCH_USER_ROLE_SUCCESS:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: {
                    Username: action.payload.Username,
                    Role: action.payload.Role
                },
                AllUsers: state.AllUsers,
                Classes: state.Classes                
            }
        case FETCH_USER_ROLE_FAILURE:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes                
            }
        case FETCH_ALL_USERS_START:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes
            }
        case FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: action.payload,
                Classes: state.Classes
            }
        case FETCH_ALL_USERS_FAILURE:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: state.ActiveUser,
                AllUsers: state.AllUsers,
                Classes: state.Classes
            }
        case SET_ACTIVE_USER:
            return {
                ...state,
                IsLoading: state.IsLoading,
                Error: state.Error,
                ActiveUser: {
                    Username: action.payload.Username,
                    Role: action.payload.Role
                },
                AllUsers: state.AllUsers,
                Classes: state.Classes
            };
        default:
            return state;
    }
};
