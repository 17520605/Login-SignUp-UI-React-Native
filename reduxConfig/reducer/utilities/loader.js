import { typeReducer } from '../../../utilities/constants';

const initState = 0;

export default (state = initState, action) => {
    switch(action.type) {
        case typeReducer.loader:
            let countProcess = state;
            if(action.payload === true) countProcess++;
            else if(action.payload === false) countProcess--;
            else if(action.payload > 0) countProcess = action.payload; // manual add number of processes loading
            if(countProcess < 0) countProcess = 0;
            return countProcess;
        default: 
            return state;
    }
}