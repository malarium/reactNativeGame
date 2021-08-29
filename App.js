import React from "react";
import { Text } from "react-native";
import { MainMenu } from "./modules/MainMenu";
import { Game } from "./modules/Game";

const App = () => {
  const [page, setPage] = React.useState(0);

  /* setters from useState hook don't work when passed directly in props.
  State must be updated from within the same component it was created in. */
  function pageUpdate(nr) {
    setPage(nr);
  }

  return page === 0 ? (
    <MainMenu setPage={pageUpdate} />
  ) : page === 1 ? (
    <Game setPage={pageUpdate} />
  ) : (
    <Text>CREDITS</Text>
  );
};

export default App;
