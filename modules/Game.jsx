import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import {
  View,
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
import { Ionicons } from "@expo/vector-icons";
import { sleep } from "../helpers/sleep";

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
    fontSize: 50,
  },
  letters: {
    flexDirection: `row`,
    flex: 1,
    justifyContent: "center",
    alignItems: `center`,
    backgroundColor: `rebeccapurple`,
  },
  bottomBar: {
    flexDirection: `row`,
    flex: 0.4,
    alignItems: `center`,
    justifyContent: `center`,
    justifyContent: `space-around`,
    backgroundColor: `teal`,
  },
  letters_single: {
    marginLeft: 18,
    fontSize: 50,
  },
  points: {
    fontSize: 60,
    color: `darkslategrey`,
    fontWeight: `700`,
  },
});

export function Game(props) {
  const win = useWindowDimensions();
  const [currentGameElement, setCurrentGameElement] = useState(null);
  const [currentElementIndex, setCurrentElementIndex] = useState(0);
  const [shuffledLetters, setShuffledLetters] = useState([]);
  const [blanks, setBlanks] = useState([]);
  const [points, setPoints] = useState(0);
  const iconColor = `black`;

  useEffect(() => {
    setCurrentGameElement(GameElementsList[currentElementIndex]);
  });

  useEffect(() => {
    loadInitialBlanksAndLettersState();
  }, [currentGameElement]);

  useEffect(() => {
    setCurrentGameElement(GameElementsList[currentElementIndex]);
  }, [currentElementIndex]);

  function loadInitialBlanksAndLettersState() {
    if (currentGameElement !== null) {
      setBlanks([]);
      Array.from(currentGameElement.word).forEach((letter) => {
        setBlanks((blanks) => [...blanks, `_`]);
      });
      setShuffledLetters(shuffleArray(Array.from(currentGameElement.word)));
    }
  }

  function getNextElement() {
    if (currentElementIndex < GameElementsList.length - 1) {
      setCurrentElementIndex(currentElementIndex + 1);
    } else {
      props.setPage(2);
    }
  }

  function placeOrRemoveLetter(letter, remove) {
    if (letter === `_`) {
      return;
    }
    const blanksCopy = blanks;
    const shuffledCopy = shuffledLetters;
    const idxOfChangedChar = remove
      ? blanks.indexOf(letter)
      : blanks.indexOf(`_`);
    if (remove) {
      blanksCopy[idxOfChangedChar] = `_`;
      shuffledCopy.push(letter);
    } else {
      blanksCopy[idxOfChangedChar] = letter;
      const idxOfChosenLetter = shuffledCopy.indexOf(letter);
      shuffledCopy.splice(idxOfChosenLetter, 1);
    }
    setBlanks([...blanksCopy]);
    setShuffledLetters([...shuffledCopy]);
  }

  function speakPartialWord() {
    const idxOfFirstBlank = blanks.indexOf(`_`);
    const blanksCopy = blanks;
    return blanksCopy.slice(0, idxOfFirstBlank).join(``);
  }

  async function checkIfWordIsCorrect() {
    if (blanks.includes(`_`)) {
      speak(speakPartialWord());
      return;
    }
    if (blanks.join(``) === currentGameElement.word) {
      speak(`Yes, you got that right!`);
      await sleep(1750);
      setPoints(points + 1);
      getNextElement();
      return;
    }
    speak(`try again`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            speak(currentGameElement.word);
          }}
        >
          <Image
            style={[styles.image, { width: win.width }]}
            source={currentGameElement?.uri}
          />
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => {
          checkIfWordIsCorrect();
        }}
      >
        <View style={styles.blanks}>
          {blanks.map((char, i) => (
            <TouchableWithoutFeedback
              key={i}
              onPress={() => placeOrRemoveLetter(char, true)}
            >
              <Text style={styles.blanks_single}>{char}</Text>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.letters}>
        {shuffledLetters.map((letter, i) => (
          <TouchableWithoutFeedback
            key={i}
            onLongPress={() => speak(letter)}
            onPress={() => placeOrRemoveLetter(letter, false)}
          >
            <Text style={styles.letters_single}>{letter}</Text>
          </TouchableWithoutFeedback>
        ))}
      </View>
      <View style={styles.bottomBar}>
        <Ionicons
          style={{ transform: [{ rotateX: "180deg" }, { rotateZ: "180deg" }] }}
          name="md-exit-sharp"
          size={42}
          color={iconColor}
          onPress={() => props.setPage(0)}
        />
        <Text style={styles.points}>{points}</Text>
        <Ionicons
          name="md-repeat"
          size={42}
          color={iconColor}
          onPress={() => loadInitialBlanksAndLettersState()}
        />
      </View>
      {/* <Button title={`BACK`} onPress={() => props.setPage(0)} />
      <Button title={`ON`} onPress={getNextElement} /> */}
    </View>
  );
}
