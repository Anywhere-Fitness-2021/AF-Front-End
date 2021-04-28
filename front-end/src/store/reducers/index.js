import {
    FETCH_CLASSES_START,
    FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_FAILURE
} from '../actions';

const initialState = {
    IsLoading: false,
    Error: 'Test error message.',
    ActiveUser: {
        Role: 'Client',
        Username: 'yogafan123'
    },
    Classes: [
        {
            ClassId: 1,
            Name: 'Yoga 4 Everyone!',
            Type: 'Yoga',
            StartTime: '6AM',
            Duration: '30 Minutes',
            IntensityLevel: 'Beginner',
            Location: 'Los Angeles',
            Attendees: 16,
            MaxClassSize: 20
        },
        {
            ClassId: 2,
            Name: 'Pilates 4 Enthusiasts!',
            Type: 'Pilates',
            StartTime: '6PM',
            Duration: '60 Minutes',
            IntensityLevel: 'Intermediate',
            Location: 'Miami',
            Attendees: 16,
            MaxClassSize: 20
        }
    ]
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
