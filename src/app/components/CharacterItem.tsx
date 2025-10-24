// src/app/components/CharacterItem.tsx

import { CharacterData } from "../types/character-data";
import CharacterSprite from "./CharacterSprite";
import { SpriteCropKey } from "../types/sprite-crop-key";

interface CharacterItemProps {
  data: CharacterData;
  cropKey: SpriteCropKey;
  size?: number;
}

export default function CharacterItem({
  data,
  cropKey,
  size,
}: CharacterItemProps) {
  const hpRate = (data.combat.HP / data.combat.maxHP) * 100;
  const mpRate = (data.combat.MP / data.combat.maxMP) * 100;

  return (
    <div
      className={`mb-8 text-center flex flex-col items-center p-3 rounded-lg w-48 ${data.type === "player" ? "bg-gray-100" : "bg-red-100"}`}
    >
      {/* 캐릭터 이미지 */}
      <CharacterSprite data={data.sprite} cropKey={cropKey} size={size} />

      {/* 캐릭터 등급 및 이름 */}
      <h3 className="text-lg font-bold whitespace-nowrap mb-2">
        [ {data.grade} ] {data.name}
      </h3>
      {/* 캐릭터 체력바 */}
      <div className="w-32 bg-gray-700 rounded-lg h-4 relative">
        {/* 캐릭터 남은 체력 */}
        <div
          className="bg-red-500 h-4 rounded-lg"
          style={{ width: `${hpRate}%` }}
        ></div>

        {/* 캐릭터 체력 표기 */}
        <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm text-white">
          {`${hpRate}%`}
        </p>
      </div>

      {/* 캐릭터 마나바 */}
      <div className="w-32 bg-gray-700 rounded-lg h-4 relative mt-1">
        {/* 캐릭터 남은 마나 */}
        <div
          className="bg-blue-500 h-4 rounded-lg"
          style={{ width: `${mpRate}%` }}
        ></div>

        {/* 캐릭터 마나 표기 */}
        <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-sm text-white">
          {`${mpRate}%`}
        </p>
      </div>
    </div>
  );
}
