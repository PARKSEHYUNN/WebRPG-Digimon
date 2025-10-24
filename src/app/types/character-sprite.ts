// src/app/types/character-sprite.ts

export type CharacterSprite = {
  image: string;
  crops: {
    [key: string]: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
};
