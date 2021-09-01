import React, { useState } from "react";
import { Text } from "react-native";
import { MainMenu } from "./modules/MainMenu";
import { Game } from "./modules/Game";
import { returnRandomGameElementsShuffled } from "./helpers/gameElementsList";
import { VictoryScreen } from "./modules/VictoryScreen";

const App = () => {
  const [page, setPage] = React.useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(``);
  const [points, setPoints] = useState(0);
  const [shuffledGameElements, setShuffledGameElements] = useState();

  useState(() => {
    setShuffledGameElements(returnRandomGameElementsShuffled());
  }, []);

  /* setters from useState hook don't work when passed directly in props.
  State must be updated from within the same component it was created in. */
  function pageUpdate(nr) {
    if (nr === 0) {
      setShuffledGameElements(returnRandomGameElementsShuffled());
    }
    setPage(nr);
  }
  function pointsUpdate(nr) {
    setPoints(nr);
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
      setPoints={pointsUpdate}
      currentLanguage={currentLanguage}
      shuffledGameElements={shuffledGameElements}
    />
  ) : page === 2 ? (
    <VictoryScreen
      setPage={pageUpdate}
      currentLanguage={currentLanguage}
      points={points}
    />
  ) : (
    <Text>CREDITS</Text>
  );
};

export default App;
