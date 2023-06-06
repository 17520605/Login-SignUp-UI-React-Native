import { typeReducer } from '../../../utilities/constants';

const initState = true;

export default (state = initState, action) => {
    switch(action.type) {
        case typeReducer.loaderImageLayout:
            return action.payload;
        default:
            return state;
    }
}