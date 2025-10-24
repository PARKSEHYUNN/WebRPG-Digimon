// src/app/page.tsx

"use client";

import { useState } from "react";
import CharacterItem from "./components/CharacterItem";
import { CharacterData } from "./types/character-data";
import BattleActionButton from "./components/BattleActionButton";
import { CharacterType } from "./types/character-type";

import { GankoomonX } from "./temp/players/GankoomonX";
import { OmegamonX } from "./temp/players/OmegamonX";
import { DukemonX } from "./temp/players/DukemonX";
import { LucemonX } from "./temp/enemy/LucemonX";
import { OgudomonX } from "./temp/enemy/OgudomonX";
import { LilithmonX } from "./temp/enemy/LilithmonX";

type ActiveTurn = {
  type: CharacterType;
  index: number;
};

export default function BattlePage() {
  const [playerTeam, setPlayerTeam] = useState<CharacterData[]>([
    GankoomonX,
    OmegamonX,
    DukemonX,
  ]);

  const [enemyTeam, setEnemyTeam] = useState<CharacterData[]>([
    LucemonX,
    OgudomonX,
    LilithmonX,
  ]);

  const [isAttaking, setIsAttaking] = useState(false);
  const [activeTurn, setActiveTurn] = useState<ActiveTurn>({
    type: "player",
    index: 0,
  });

  const handleTargetSelect = (
    targetType: CharacterType,
    targetIndex: number
  ) => {
    if (!isAttaking) return;

    const attacker =
      activeTurn.type === "player"
        ? playerTeam[activeTurn.index]
        : enemyTeam[activeTurn.index];
  };

  const handleAttack = () => {
    console.log("공격!");
    // setIsAttaking(true);
  };

  const handleDefence = () => {
    console.log("방어");
  };

  const handleUseItem = () => {
    console.log("아이템 사용");
  };

  const handleRunAway = () => {
    console.log("도망");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      {/* 적 */}
      <div className="flex items-center gap-4">
        {enemyTeam.map((enemy, index) => (
          <CharacterItem key={index} data={enemy} cropKey="face" />
        ))}
      </div>

      {/* 플레이어 + 커맨드 버튼 */}
      <div className="flex flex-col items-center gap-4">
        {/* 플레이어 */}
        <div className="flex items-center gap-4">
          {playerTeam.map((player, index) => (
            <CharacterItem key={index} data={player} cropKey="face" />
          ))}
        </div>

        {/* 커맨드 버튼 */}
        <div className="flex items-center gap-2">
          {isAttaking ? (
            <p>공격할 대상을 선택 해주세요.</p>
          ) : (
            <BattleActionButton
              handleAttack={handleAttack}
              handleDefence={handleDefence}
              handleUseItem={handleUseItem}
              handleRunAway={handleRunAway}
            />
          )}
        </div>
      </div>
    </main>
  );
}
