import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  BackHandler,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { Translations } from "../helpers/languageElements";
import { getAvailableLanguages, stopSpeech } from "../helpers/speak";
import { LanguagesChoice } from "./LanguagesChoice";
// import { useFonts } from "@expo-google-fonts/inter";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  mainNavigation: {
    display: "flex",
    width: 100,
  },
  mainNavigation_btn: {
    width: 200,
    height: 200,
    backgroundColor: "#f2f2f2",
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 100,
    borderWidth: 20,
    borderColor: "tomato",
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
  },
  mainNavigation_btn_play: {
    borderColor: "green",
  },
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});

export function MainMenu(props) {
  const win = useWindowDimensions();
  const [languages, setLanguages] = useState([]);
  const [allDependenciesLoaded, setAllDependenciesLoaded] = useState(false);
  const [languageKey, setLanguageKey] = useState();
  let safetyCounter = 0;

  useEffect(() => {
    fetchLanguages();
    chooseLanguage(props.currentLanguage);
  }, []);

  function chooseLanguage(lang) {
    if (lang) {
      props.languageUpdate(lang);
      setLanguageKey(lang.split(`-`).join(``));
    } else {
      props.languageUpdate(`en-GB`);
      setLanguageKey(`enGB`);
    }
  }

  async function fetchLanguages() {
    const langs = await getAvailableLanguages();
    if (langs.length < 1) {
      if (safetyCounter < 5) {
        safetyCounter += 1;
        setTimeout(() => {
          fetchLanguages();
        }, 250);
      } else {
        // No languages available
        setAllDependenciesLoaded(true);
      }
    } else {
      setLanguages(langs);
      setAllDependenciesLoaded(true);
    }
  }

  const initExit = () => {
    stopSpeech();
    BackHandler.exitApp();
  };
  const initPlay = () => {
    props.setPage(1);
  };

  return allDependenciesLoaded ? (
    <View style={styles.container}>
      <ImageBackground
        source={require(`../assets/background_letters.jpg`)}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.mainNavigation}>
          <Pressable
            style={[styles.mainNavigation_btn, styles.mainNavigation_btn_play]}
            onPress={initPlay}
            left={(win.width - 200) / 2}
          >
            <Text style={styles.text}>{Translations.play[languageKey]}</Text>
          </Pressable>
          <Pressable
            style={styles.mainNavigation_btn}
            onPress={initExit}
            left={(win.width - 200) / 2}
          >
            <Text style={styles.text}>{Translations.exit[languageKey]}</Text>
          </Pressable>
        </View>
        <LanguagesChoice
          languages={languages}
          chooseLanguage={chooseLanguage}
        />
      </ImageBackground>
    </View>
  ) : (
    <View style={styles.image}>
      <ActivityIndicator color="teal" size="large" />
    </View>
  );
}
