// src/app/temp/DukemonX.ts

import { CharacterData } from "../../types/character-data";

export const DukemonX: CharacterData = {
  name: "듀크몬 X",
  type: "player",
  grade: "UR",
  sprite: {
    image: "/digimons/DukemonX.png",
    crops: {
      full: { x: 0, y: 0, width: 600, height: 820 },
      face: { x: 290, y: 100, width: 135, height: 135 },
    },
  },
  combat: {
    maxHP: 100,
    HP: 100,
    maxMP: 100,
    MP: 100,
    baseATK: 10,
    finalATK: 10,
    baseDEF: 10,
    finalDEF: 10,
  },
};
