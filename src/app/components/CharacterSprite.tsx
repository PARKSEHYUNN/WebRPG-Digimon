// src/app/components/CharacterSprite.tsx

import { CSSProperties } from "react";
import { SpriteCropKey } from "../types/sprite-crop-key";

type CharacterSpriteData = {
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

type CharacterSpriteProps = {
  data: CharacterSpriteData;
  cropKey: SpriteCropKey;
  size?: number;
};

export default function CharacterSprite({
  data,
  cropKey,
  size,
}: CharacterSpriteProps) {
  const crop = data.crops[cropKey];

  if (!crop) {
    console.error(`Crop key "${cropKey}" not found in character sprite data.`);
    return null;
  }

  const borderWidth = 5;
  const outerRadius = 10;
  const innerRadius =
    outerRadius - borderWidth < 0 ? 0 : outerRadius - borderWidth;

  const borderWrapperStyle: CSSProperties = {
    width: size ? `${size}px` : `${crop.width + borderWidth * 2}px`,
    height: size ? `${size}px` : `${crop.height + borderWidth * 2}px`,

    background: "linear-gradient(45deg, #a8d5e5, #f7d4e8, #b2fcfd, #f7d4e8)",

    padding: `${borderWidth}px`,
    borderRadius: `${outerRadius}px`,
    boxSizing: "border-box",
    display: "inline-block",
    position: "relative",
  };

  const containerStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    imageRendering: "pixelated",
    backgroundColor: "white",
    borderRadius: `${innerRadius}px`,
  };

  const scale = size ? (size - borderWidth * 2) / crop.width : 1;

  const imageStyle: CSSProperties = {
    position: "absolute",
    transform: `scale(${scale}) translate(-${crop.x}px, -${crop.y}px)`,
    transformOrigin: "top left",
    maxWidth: "none",
  };

  return (
    <div style={borderWrapperStyle}>
      <div style={containerStyle}>
        <img
          src={data.image}
          style={imageStyle}
          width={data.crops.full.width}
          height={data.crops.full.height}
        />
      </div>
    </div>
  );
}
