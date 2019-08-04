import { GET_TOPICS } from '../actions/topics'

const initialState = {
    topics : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TOPICS:
            return {...state,topics:action.payload}
        default:
            return state;
    }
};