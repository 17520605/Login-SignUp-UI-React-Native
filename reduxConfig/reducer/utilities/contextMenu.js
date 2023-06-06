import { typeReducer } from "../../../utilities/constants";

const initState = {
    top: null,
    left: null,
    options: []
}

export default (state = initState, action) => {
  switch (action.type) {

    case typeReducer.setContextMenu:
      return action.payload;
    default:
      return state;
  }
};
