import * as Speech from "expo-speech";

export const speak = (text) => {
  // Speech.getAvailableVoicesAsync().then((v) => console.log(v));
  Speech.speak(text, {
    language: "en-US",
  });
};
