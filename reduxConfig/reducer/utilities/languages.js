import { typeReducer } from '../../../utilities/constants';
import languageKit_eng from '../../../utilities/languageKit_eng';
import languageKit_kor from '../../../utilities/languageKit_kor';
import AsyncStorage from '@react-native-async-storage/async-storage';

let initState = languageKit_eng; // Set a default language

AsyncStorage.getItem('MYMY_language').then((language) => {
  if (language === 'ko') {
    initState = languageKit_kor;
  } else {
    initState = languageKit_eng;
  }
});

export default (state = initState, action) => {
  switch (action.type) {
    case typeReducer.lang:
      if (action.payload === 'ko') {
        return languageKit_kor.JSON.parse();
      } else {
        return languageKit_eng.JSON.parse();
      }
    default:
      return state;
  }
};
