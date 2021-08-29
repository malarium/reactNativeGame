import * as Speech from "expo-speech";

export const speak = (text, lang = `en-GB`) => {
  Speech.speak(text, {
    language: lang,
  });
};

export const getAvailableLanguages = () => {
  return Speech.getAvailableVoicesAsync().then((v) => v);
};
