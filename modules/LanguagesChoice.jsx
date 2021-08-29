import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet, Text } from "react-native";
import { LanguageElementsList } from "../helpers/languageElements";

const styles = StyleSheet.create({
  languages: {
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: `center`,
    justifyContent: `space-around`,
    backgroundColor: `teal`,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 50,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    backgroundColor: "#E0BBE4",
  },
});

export function LanguagesChoice(props) {
  const [availableLanguages, setAvailableLanguages] = useState([]);

  useEffect(() => {
    setAvailableFlags();
  }, []);

  function setAvailableFlags() {
    setAvailableLanguages([]);
    const tempLangsArray = [];
    LanguageElementsList.map((language) => {
      const fromAllAvailable = props.languages.find(
        (l) => l.language === language.code
      );
      if (fromAllAvailable) {
        tempLangsArray.push(
          LanguageElementsList.find(
            (el) => el.code === fromAllAvailable.language
          )
        );
      }
    });
    setAvailableLanguages(tempLangsArray);
  }

  return (
    <View style={styles.languages}>
      {availableLanguages.map((languageObject, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => {
            props.chooseLanguage(languageObject.code);
          }}
        >
          <Image
            style={[{ width: 50, height: 50 }]}
            source={languageObject.uri}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
