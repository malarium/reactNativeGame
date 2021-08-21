import * as Speech from "expo-speech";

export const speak = (text) => {
  Speech.speak(text, {
    language: "pl-PL",
    voice: "pl-pl-x-oda-network",
  });
};
