import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  BackHandler,
  useWindowDimensions,
} from "react-native";

const initPlay = () => {
  console.log(`Gramy!`);
};

const initExit = () => {
  BackHandler.exitApp();
};

const App = () => {
  const win = useWindowDimensions();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`./assets/background_letters.jpg`)}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.mainNavigation}>
          <Pressable
            style={styles.mainNavigation_btn}
            onPress={initPlay}
            left={(win.width - 200) / 2}
          >
            <Text style={styles.text}>Graj</Text>
          </Pressable>
          <Pressable
            style={styles.mainNavigation_btn}
            onPress={initExit}
            left={(win.width - 200) / 2}
          >
            <Text style={styles.text}>Wyjdź</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

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
    marginTop: 20,
    borderRadius: 100,
    borderWidth: 20,
    borderColor: "tomato",
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
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
export default App;
