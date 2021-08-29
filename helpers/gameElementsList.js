import { shuffleArray } from "./shuffleArray";

export const GameElementsList = [
  {
    uri: require("../assets/gameImgs/earth.png"),
    word: {
      enGB: `earth`,
      enUS: `earth`,
      plPL: `ziemia`,
      esES: `tierra`,
      itIT: `terra`,
      deDE: `erde`,
    },
  },
  {
    uri: require("../assets/gameImgs/pumpkin.png"),
    word: {
      enGB: `pumpkin`,
      enUS: `pumpkin`,
      plPL: `dynia`,
      esES: `calabaza`,
      itIT: `zucca`,
      deDE: `kürbis`,
    },
  },
  {
    uri: require("../assets/gameImgs/fish.png"),
    word: {
      enGB: `fish`,
      enUS: `fish`,
      plPL: `ryba`,
      esES: `pez`,
      itIT: `pesce`,
      deDE: `fisch`,
    },
  },
  {
    uri: require("../assets/gameImgs/cake.png"),
    word: {
      enGB: `cake`,
      enUS: `cake`,
      plPL: `tort`,
      esES: `pastel`,
      itIT: `torta`,
      deDE: `kuchen`,
    },
  },
  {
    uri: require("../assets/gameImgs/ghost.png"),
    word: {
      enGB: `ghost`,
      enUS: `ghost`,
      plPL: `duch`,
      esES: `fantasma`,
      itIT: `fantasma`,
      deDE: `geist`,
    },
  },
];

export function returnGameElementsShuffled() {
  return shuffleArray(GameElementsList);
}
