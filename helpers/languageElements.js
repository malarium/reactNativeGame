export const LanguageElementsList = [
  { uri: require("../assets/flags/united-kingdom.png"), code: `en-GB` },
  { uri: require("../assets/flags/spain.png"), code: `es-ES` },
  { uri: require("../assets/flags/germany.png"), code: `de-DE` },
  { uri: require("../assets/flags/poland.png"), code: `pl-PL` },
  { uri: require("../assets/flags/italy.png"), code: `it-IT` },
];

export const Translations = {
  play: {
    enGB: `play`,
    enUS: `play`,
    plPL: `graj`,
    esES: `juego`,
    itIT: `giocare`,
    deDE: `abspielen`,
  },
  exit: {
    enGB: `exit`,
    enUS: `exit`,
    plPL: `wyjdź`,
    esES: `salga`,
    itIT: `finire`,
    deDE: `beenden`,
  },
  correct: {
    enGB: `Yes, you got that right!`,
    enUS: `Yes, you got that right!`,
    plPL: `Brawo, znakomicie!`,
    esES: `Si lo hiciste genial!`,
    itIT: `Sì, sei stato bravissimo!`,
    deDE: `Ja, das hast du toll gemacht.`,
  },
  incorrect: {
    enGB: `Sorry, that's not it. Try again.`,
    enUS: `Sorry, that's not it. Try again.`,
    plPL: `Niestety nie. Spróbuj ponownie.`,
    esES: `Lo siento, no es eso. Intentar otra vez.`,
    itIT: `Mi dispiace, non è questo. Riprova.`,
    deDE: `Entschuldigung, das ist es nicht. Versuchen Sie es nochmal.`,
  },
};
