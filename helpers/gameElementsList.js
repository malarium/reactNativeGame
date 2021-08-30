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
  {
    uri: require("../assets/gameImgs/flower.jpg"),
    word: {
      enGB: `flowers`,
      enUS: `flowers`,
      plPL: `kwiaty`,
      esES: `flores`,
      itIT: `fiori`,
      deDE: `blumen`,
    },
  },
  {
    uri: require("../assets/gameImgs/house.png"),
    word: {
      enGB: `house`,
      enUS: `house`,
      plPL: `domek`,
      esES: `casa`,
      itIT: `casa`,
      deDE: `haus`,
    },
  },
  {
    uri: require("../assets/gameImgs/rocket.png"),
    word: {
      enGB: `rocket`,
      enUS: `rocket`,
      plPL: `rakieta`,
      esES: `cohete`,
      itIT: `razzo`,
      deDE: `rakete`,
    },
  },
  {
    uri: require("../assets/gameImgs/snake.png"),
    word: {
      enGB: `snake`,
      enUS: `snake`,
      plPL: `wąż`,
      esES: `serpiente`,
      itIT: `serpente`,
      deDE: `schlange`,
    },
  },
  {
    uri: require("../assets/gameImgs/sweets.png"),
    word: {
      enGB: `sweets`,
      enUS: `sweets`,
      plPL: `słodycze`,
      esES: `dulces`,
      itIT: `dolci`,
      deDE: `süßigkeiten`,
    },
  },
];

export function returnRandomGameElementsShuffled() {
  return getRandom(GameElementsList, 5);
}
function getRandom(arr, n) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
