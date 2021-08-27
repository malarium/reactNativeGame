import * as Speech from "expo-speech";

export const speak = (text) => {
  Speech.speak(text, {
    language: "en-US",
  });
};

export const getAvailableLanguages = () => {
  return Speech.getAvailableVoicesAsync().then((v) => v);
};
