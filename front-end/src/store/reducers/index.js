import {
    FETCH_CLASSES_START,
    FETCH_CLASSES_SUCCESS,
    FETCH_CLASSES_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    error: 'Test error message.',
    activeUser: {
        role: 'Client',
        username: 'yogafan123'
    },
    classes: [
        {
            classId: 1,
            name: 'Yoga 4 Everyone!',
            type: 'Yoga',
            startTime: '6:00',
            duration: '30 minutes',
            intensityLevel: 'Beginner',
            location: 'Los Angeles',
            attendees: 16,
            maxClassSize: 20
        },
        {
            classId: 2,
            name: 'Pilates 4 Enthusiasts!',
            type: 'Pilates',
            startTime: '18:00',
            duration: '60 minutes',
            intensityLevel: 'Intermediate',
            location: 'Miami',
            attendees: 16,
            maxClassSize: 20
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CLASSES_START:
            return {
                ...state,
                isLoading: true,
                error: '',
                user: state.user,
                classes: []
            };
        case FETCH_CLASSES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                user: state.user,
                classes: action.payload
            };
        case FETCH_CLASSES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                user: state.user,
                classes: []
            };
        default:
            return state;
    }
};
