import React, { useState } from "react";
import { Text } from "react-native";
import { MainMenu } from "./modules/MainMenu";
import { Game } from "./modules/Game";
import { returnGameElementsShuffled } from "./helpers/gameElementsList";

const App = () => {
  const [page, setPage] = React.useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(``);
  const shuffledGameElements = returnGameElementsShuffled();

  /* setters from useState hook don't work when passed directly in props.
  State must be updated from within the same component it was created in. */
  function pageUpdate(nr) {
    setPage(nr);
  }

  function languageUpdate(lang) {
    setCurrentLanguage(lang);
  }

  return page === 0 ? (
    <MainMenu
      setPage={pageUpdate}
      languageUpdate={languageUpdate}
      currentLanguage={currentLanguage}
    />
  ) : page === 1 ? (
    <Game
      setPage={pageUpdate}
      currentLanguage={currentLanguage}
      shuffledGameElements={shuffledGameElements}
    />
  ) : (
    <Text>CREDITS</Text>
  );
};

export default App;
