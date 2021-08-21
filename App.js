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
import { MainMenu } from "./modules/MainMenu";

const App = () => {
  const [page, setPage] = React.useState(0);

  return page === 0 ? (
    <MainMenu setPage={setPage} />
  ) : page === 1 ? (
    <Text>TEST</Text>
  ) : (
    <Text>TEST2</Text>
  );
};

export default App;
