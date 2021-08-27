import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
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
import { getAvailableLanguages } from "../helpers/speak";
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
  languages: {
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: `center`,
    justifyContent: `space-around`,
  },
});

export function MainMenu(props) {
  const win = useWindowDimensions();
  const [languages, setLanguages] = useState([]);
  const [allDependenciesLoaded, setAllDependenciesLoaded] = useState(false);
  let safetyCounter = 0;

  useEffect(() => {
    fetchLanguages();
  }, []);

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

  // function getCountryCode(name) {
  //   switch (name) {
  //     case `en-US`:
  //       return `US`;

  //     case `en-GB`:
  //       return `GB`;

  //     case `pl-PL`:
  //       return `PL`;
  //   }
  // }

  const initExit = () => {
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
            <Text style={styles.text}>GRAJ</Text>
          </Pressable>
          <Pressable
            style={styles.mainNavigation_btn}
            onPress={initExit}
            left={(win.width - 200) / 2}
          >
            <Text style={styles.text}>WYJDŹ</Text>
          </Pressable>
        </View>
        <View style={styles.languages}>
          {languages.map((languageObject, i) => (
            <TouchableOpacity key={i}>
              <Text>{languageObject.language}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  ) : (
    <View style={styles.image}>
      <ActivityIndicator color="teal" size="large" />
    </View>
  );
}
