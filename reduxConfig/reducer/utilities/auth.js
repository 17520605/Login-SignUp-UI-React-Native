import { typeReducer } from "../../../utilities/constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initState = {
  token: null,
  permission: null,
  type: null,
  id: null,
  loginName: null,
  email: null,
  displayName: null,
  quota: null,
  language: null
};

const retrieveData = async () => {
  const token = await AsyncStorage.getItem("IMAtoken");
  const permission = await AsyncStorage.getItem("permission");
  const type = await AsyncStorage.getItem("type");
  const id = await AsyncStorage.getItem("id");
  const loginName = await AsyncStorage.getItem("loginName");
  const email = await AsyncStorage.getItem("email");
  const displayName = await AsyncStorage.getItem("displayName");
  const quota = await AsyncStorage.getItem("quota");
  const language = await AsyncStorage.getItem("language");

  return {
    token,
    permission,
    type,
    id,
    loginName,
    email,
    displayName,
    quota,
    language
  };
};

retrieveData().then((data) => {
  Object.assign(initState, data);
});

export default (state = initState, action) => {
  switch (action.type) {
    case typeReducer.auth:
      return { ...state, token: action.payload };
    case typeReducer.authInfo:
      return action.payload;
    default:
      return state;
  }
};
