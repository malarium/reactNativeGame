import { shuffleArray } from "./shuffleArray";

export const GameElementsList = [
  // {
  //   uri: require("../assets/gameImgs/earth.png"),
  //   word: {
  //     enGB: `earth`,
  //     enUS: `earth`,
  //     plPL: `ziemia`,
  //     esES: `tierra`,
  //     itIT: `terra`,
  //     deDE: `erde`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/pumpkin.png"),
  //   word: {
  //     enGB: `pumpkin`,
  //     enUS: `pumpkin`,
  //     plPL: `dynia`,
  //     esES: `calabaza`,
  //     itIT: `zucca`,
  //     deDE: `kürbis`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/fish.png"),
  //   word: {
  //     enGB: `fish`,
  //     enUS: `fish`,
  //     plPL: `ryba`,
  //     esES: `pez`,
  //     itIT: `pesce`,
  //     deDE: `fisch`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/cake.png"),
  //   word: {
  //     enGB: `cake`,
  //     enUS: `cake`,
  //     plPL: `tort`,
  //     esES: `pastel`,
  //     itIT: `torta`,
  //     deDE: `kuchen`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/ghost.png"),
  //   word: {
  //     enGB: `ghost`,
  //     enUS: `ghost`,
  //     plPL: `duch`,
  //     esES: `fantasma`,
  //     itIT: `fantasma`,
  //     deDE: `geist`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/flower.jpg"),
  //   word: {
  //     enGB: `flowers`,
  //     enUS: `flowers`,
  //     plPL: `kwiaty`,
  //     esES: `flores`,
  //     itIT: `fiori`,
  //     deDE: `blumen`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/house.png"),
  //   word: {
  //     enGB: `house`,
  //     enUS: `house`,
  //     plPL: `domek`,
  //     esES: `casa`,
  //     itIT: `casa`,
  //     deDE: `haus`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/rocket.png"),
  //   word: {
  //     enGB: `rocket`,
  //     enUS: `rocket`,
  //     plPL: `rakieta`,
  //     esES: `cohete`,
  //     itIT: `razzo`,
  //     deDE: `rakete`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/snake.png"),
  //   word: {
  //     enGB: `snake`,
  //     enUS: `snake`,
  //     plPL: `wąż`,
  //     esES: `serpiente`,
  //     itIT: `serpente`,
  //     deDE: `schlange`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/sweets.png"),
  //   word: {
  //     enGB: `sweets`,
  //     enUS: `sweets`,
  //     plPL: `słodycze`,
  //     esES: `dulces`,
  //     itIT: `dolci`,
  //     deDE: `süßigkeiten`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/bunny.png"),
  //   word: {
  //     enGB: `bunny`,
  //     enUS: `bunny`,
  //     plPL: `króliczek`,
  //     esES: `conejito`,
  //     itIT: `coniglio`,
  //     deDE: `hase`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/school.png"),
  //   word: {
  //     enGB: `school`,
  //     enUS: `school`,
  //     plPL: `szkoła`,
  //     esES: `escuela`,
  //     itIT: `scuola`,
  //     deDE: `schule`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/octopus.png"),
  //   word: {
  //     enGB: `octopus`,
  //     enUS: `octopus`,
  //     plPL: `ośmiornica`,
  //     esES: `pulpo`,
  //     itIT: `polpo`,
  //     deDE: `tintenfisch`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/schoolbag.png"),
  //   word: {
  //     enGB: `schoolbag`,
  //     enUS: `schoolbag`,
  //     plPL: `tornister`,
  //     esES: `cartera`,
  //     itIT: `cartella`,
  //     deDE: `schulranzen`,
  //   },
  // },
  // {
  //   uri: require("../assets/gameImgs/dino.png"),
  //   word: {
  //     enGB: `dinosaur`,
  //     enUS: `dinosaur`,
  //     plPL: `dinozaur`,
  //     esES: `dinosaurio`,
  //     itIT: `dinosauro`,
  //     deDE: `dinosaurier`,
  //   },
  // },
  {
    uri: require("../assets/gameImgs/ball.png"),
    word: {
      enGB: `ball`,
      enUS: `ball`,
      plPL: `piłka`,
      esES: `pelota`,
      itIT: `sfera`,
      deDE: `ball`,
    },
  },
  {
    uri: require("../assets/gameImgs/bigfish.png"),
    word: {
      enGB: `big`,
      enUS: `big`,
      plPL: `duży`,
      esES: `grande`,
      itIT: `grande`,
      deDE: `groß`,
    },
  },
  {
    uri: require("../assets/gameImgs/bike.png"),
    word: {
      enGB: `bike`,
      enUS: `bike`,
      plPL: `rower`,
      esES: `bicicleta`,
      itIT: `bicicletta`,
      deDE: `fahrrad`,
    },
  },
  {
    uri: require("../assets/gameImgs/black.png"),
    word: {
      enGB: `black`,
      enUS: `black`,
      plPL: `czarny`,
      esES: `negro`,
      itIT: `nero`,
      deDE: `schwarz`,
    },
  },
  {
    uri: require("../assets/gameImgs/doll.jpg"),
    word: {
      enGB: `doll`,
      enUS: `doll`,
      plPL: `lalka`,
      esES: `muñeca`,
      itIT: `bambola`,
      deDE: `puppe`,
    },
  },
  {
    uri: require("../assets/gameImgs/green.png"),
    word: {
      enGB: `green`,
      enUS: `green`,
      plPL: `zielony`,
      esES: `verde`,
      itIT: `verde`,
      deDE: `grün`,
    },
  },
  {
    uri: require("../assets/gameImgs/old.png"),
    word: {
      enGB: `old`,
      enUS: `old`,
      plPL: `stary`,
      esES: `viejo`,
      itIT: `vecchio`,
      deDE: `alt`,
    },
  },
  {
    uri: require("../assets/gameImgs/orange.png"),
    word: {
      enGB: `orange`,
      enUS: `orange`,
      plPL: `pomarańczowy`,
      esES: `naranja`,
      itIT: `arancione`,
      deDE: `orange`,
    },
  },
  {
    uri: require("../assets/gameImgs/pink.png"),
    word: {
      enGB: `pink`,
      enUS: `pink`,
      plPL: `różowy`,
      esES: `rosado`,
      itIT: `rosa`,
      deDE: `rosa`,
    },
  },
  {
    uri: require("../assets/gameImgs/purple.png"),
    word: {
      enGB: `purple`,
      enUS: `purple`,
      plPL: `fioletowy`,
      esES: `morado`,
      itIT: `viola`,
      deDE: `violett`,
    },
  },
  {
    uri: require("../assets/gameImgs/red.png"),
    word: {
      enGB: `red`,
      enUS: `red`,
      plPL: `czerwony`,
      esES: `rojo`,
      itIT: `rosso`,
      deDE: `rot`,
    },
  },
  {
    uri: require("../assets/gameImgs/robot.png"),
    word: {
      enGB: `robot`,
      enUS: `robot`,
      plPL: `robot`,
      esES: `robot`,
      itIT: `robot`,
      deDE: `roboter`,
    },
  },
  {
    uri: require("../assets/gameImgs/scooter.jpg"),
    word: {
      enGB: `scooter`,
      enUS: `scooter`,
      plPL: `hulajnoga`,
      esES: `scooter`,
      itIT: `scooter`,
      deDE: `roller`,
    },
  },
  {
    uri: require("../assets/gameImgs/skateboard.jpg"),
    word: {
      enGB: `skateboard`,
      enUS: `skateboard`,
      plPL: `deskorolka`,
      esES: `patineta`,
      itIT: `skateboard`,
      deDE: `skateboard`,
    },
  },
  {
    uri: require("../assets/gameImgs/smallfish.png"),
    word: {
      enGB: `small`,
      enUS: `small`,
      plPL: `mały`,
      esES: `pequeño`,
      itIT: `piccolo`,
      deDE: `klein`,
    },
  },
  {
    uri: require("../assets/gameImgs/yellow.png"),
    word: {
      enGB: `yellow`,
      enUS: `yellow`,
      plPL: `żółty`,
      esES: `amarillo`,
      itIT: `giallo`,
      deDE: `gelb`,
    },
  },
];

export function returnRandomGameElementsShuffled() {
  const shuffledAndRandom = shuffleArray(GameElementsList).slice(0, 5);
  return shuffledAndRandom;
}
