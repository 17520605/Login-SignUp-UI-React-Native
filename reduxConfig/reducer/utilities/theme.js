import { typeReducer } from '../../../utilities/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';

let initState = 'light'; // Set a default theme

AsyncStorage.getItem('MYMY_theme').then((theme) => {
  if (theme === 'dark') {
    StatusBar.setBarStyle('light-content');
    initState = 'dark';
  } else {
    StatusBar.setBarStyle('dark-content');
    initState = 'light';
  }
});

export default (state = initState, action) => {
  switch(action.type) {
    case typeReducer.theme:
      if (action.payload === 'dark') {
        StatusBar.setBarStyle('light-content');
      } else {
        StatusBar.setBarStyle('dark-content');
      }
      return action.payload;
    default:
      return state;
  }
};