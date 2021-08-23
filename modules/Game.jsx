import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { GameElementsList } from "../helpers/gameElementsList";
import { shuffleArray } from "../helpers/shuffleArray";
import { speak } from "../helpers/speak";
import { StatusBarHeight } from "../helpers/StatusBarHeight";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBarHeight(),
  },
  image: {
    flex: 2,
    resizeMode: "contain",
    backgroundColor: "#E0BBE4",
  },
  blanks: {
    flexDirection: `row`,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `tomato`,
  },
  blanks_single: {
    marginLeft: 15,
    fontSize: 70,
  },
  letters: {
    flexDirection: `row`,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `rebeccapurple`,
  },
  letters_single: {
    marginLeft: 15,
    fontSize: 70,
  },
});

export function Game(props) {
  const win = useWindowDimensions();
  const [currentGameElement, setCurrentGameElement] = useState(null);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);

  useEffect(() => {
    setCurrentGameElement(GameElementsList[currentElementIndex]);
  });

  useEffect(() => {
    setCurrentGameElement(GameElementsList[currentElementIndex]);
  }, [currentElementIndex]);

  function getNextElement() {
    if (currentElementIndex < GameElementsList.length - 1) {
      setCurrentElementIndex(currentElementIndex + 1);
    } else {
      props.setPage(2);
    }
  }

  function generateBlanks() {
    if (currentGameElement !== null) {
      const arrOfLetters = Array.from(currentGameElement.word);
      return (
        <View style={styles.blanks}>
          {arrOfLetters.map((letter) => (
            <Text style={styles.blanks_single}>_</Text>
          ))}
        </View>
      );
    }
  }

  function generateScatteredLetters() {
    if (currentGameElement !== null) {
      const shuffledLetters = shuffleArray(Array.from(currentGameElement.word));
      return (
        <View style={styles.letters}>
          {shuffledLetters.map((letter) => (
            <Text style={styles.letters_single}>{letter}</Text>
          ))}
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            console.log(currentGameElement.word);
            speak(currentGameElement.word);
          }}
        >
          <Image
            style={[styles.image, { width: win.width }]}
            source={currentGameElement?.uri}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.blanks}>{generateBlanks()}</View>
      <View style={styles.letters}>
        <Text>{generateScatteredLetters()}</Text>
      </View>
      <Button title={`BACK`} onPress={() => props.setPage(0)} />
      <Button title={`ON`} onPress={getNextElement} />
    </View>
  );
}
