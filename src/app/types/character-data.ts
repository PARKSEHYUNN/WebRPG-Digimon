// src/app/types/character-data.ts

import { CharacterGrade } from "./character-grade";
import { CharacterSprite } from "./character-sprite";
import { CharacterCombat } from "./character-combat";
import { CharacterType } from "./character-type";

export type CharacterData = {
  name: string;
  type: CharacterType;
  grade: CharacterGrade;
  sprite: CharacterSprite;
  combat: CharacterCombat;
};
