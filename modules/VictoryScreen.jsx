import React from "react";
import { StatusBarHeight } from "../helpers/StatusBarHeight";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import { Translations } from "../helpers/languageElements";
import { speak } from "../helpers/speak";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 4,
    paddingTop: StatusBarHeight(),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `teal`,
  },
  text: {
    fontSize: 50,
  },
  score: {
    fontSize: 70,
    fontWeight: `bold`,
    color: `tomato`,
  },
  buttons: {
    width: 200,
    flexDirection: `row`,
    justifyContent: `space-between`,
    position: `absolute`,
    bottom: 50,
  },
});

export function VictoryScreen(props) {
  const [currentLanguageKey, setCurrentLanguageKey] = React.useState(``);
  const iconColor = `black`;

  React.useEffect(() => {
    setCurrentLanguageKey(props.currentLanguage.split(`-`).join(``));
  }, []);

  React.useEffect(() => {
    speak(getFinalText(), props.currentLanguage);
  }, [currentLanguageKey]);

  function getFinalText() {
    return props.points <= 2
      ? Translations.poorOutocome[currentLanguageKey]
      : props.points <= 4
      ? Translations.medicoreOutocome[currentLanguageKey]
      : Translations.goodOutocome[currentLanguageKey];
  }

  const initExit = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {Translations.youScored[currentLanguageKey]}
      </Text>
      <Text style={styles.score}>{props.points}</Text>
      <Text style={styles.text}>{Translations.points[currentLanguageKey]}</Text>
      <View style={styles.buttons}>
        <Ionicons
          style={{ transform: [{ rotateX: "180deg" }, { rotateZ: "180deg" }] }}
          name="md-exit-sharp"
          size={60}
          color={iconColor}
          onPress={() => props.setPage(0)}
        />
        <Ionicons
          name="md-close-circle-outline"
          size={60}
          color={iconColor}
          onPress={initExit}
        />
      </View>
    </View>
  );
}
