import en from './en';
import ko from './ko';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LanguageController {
  constructor() {
    this.languages = { en, ko };
    this.currentLanguage = en;
    this.loadLanguage();
  }

  async loadLanguage() {
    try {
      const languageCode = await AsyncStorage.getItem('languageCode');
      if (languageCode && this.languages[languageCode]) {
        this.currentLanguage = this.languages[languageCode];
      }
    } catch (error) {
      console.log(error);
    }
  }

  async switchLanguage(languageCode) {
    if (this.languages[languageCode]) {
      try {
        await AsyncStorage.setItem('languageCode', languageCode);
        this.currentLanguage = this.languages[languageCode];
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default new LanguageController();