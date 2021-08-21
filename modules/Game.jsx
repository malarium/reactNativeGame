import React from "react";
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
    flex: 1,
    backgroundColor: `tomato`,
  },
  letters: {
    flex: 1,
    backgroundColor: `rebeccapurple`,
  },
});

export function Game(props) {
  const win = useWindowDimensions();
  const gameElement = GameElementsList[1];

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            console.log(gameElement.word);
            speak(gameElement.word);
          }}
        >
          <Image
            style={[styles.image, { width: win.width }]}
            source={gameElement.uri}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.blanks}>
        <Text>Blanks</Text>
      </View>
      <View style={styles.letters}>
        <Text>Letters</Text>
      </View>
      <Button title={`BACK`} onPress={() => props.setPage(0)} />
      <Button title={`ON`} onPress={() => props.setPage(2)} />
    </View>
  );
}
