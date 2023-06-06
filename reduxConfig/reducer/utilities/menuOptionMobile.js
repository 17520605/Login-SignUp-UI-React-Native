import { typeReducer } from '../../../utilities/constants';

const initState = {
    active: false,
    propsChildren: null
};

export default (state = initState, action) => {
    switch(action.type) {
        case typeReducer.menuOptionMobile:
            return action.payload;
        default:
            return state;
    }
}