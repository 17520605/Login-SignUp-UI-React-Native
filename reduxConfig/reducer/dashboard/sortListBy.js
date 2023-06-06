import { typeReducer } from "../../../utilities/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getInitialState = async () => {
  let sortBy = await AsyncStorage.getItem("IMASortBy");
  if (!sortBy || sortBy === "none") {
    sortBy = "latest";
    await AsyncStorage.setItem("IMASortBy", "latest");
  }
  return sortBy;
};

const initStatePromise = getInitialState();

export default (state = null, action) => {
  switch (action.type) {
    case typeReducer.sortListBy:
      return action.payload;
    default:
      return state ?? initStatePromise; // Use '??' operator to return the Promise as state until it resolves
  }
};
