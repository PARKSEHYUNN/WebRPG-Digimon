// src/app/components/BattleActionButton.tsx

type BattleActionButtonProps = {
  handleAttack: () => void;
  handleDefence: () => void;
  handleUseItem: () => void;
  handleRunAway: () => void;
};

export default function BattleActionButton({
  handleAttack,
  handleDefence,
  handleUseItem,
  handleRunAway,
}: BattleActionButtonProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {/* 공격 버튼 */}
      <button
        onClick={handleAttack}
        className="bg-blue-500 hover:bg-blue-700 w-24 h-12 rounded-lg text-white cursor-pointer"
      >
        공격
      </button>

      {/* 방어 버튼 */}
      <button
        onClick={handleDefence}
        className="bg-green-500 hover:bg-green-700 w-24 h-12 rounded-lg text-white cursor-pointer"
      >
        방어
      </button>

      {/* 아이템 버튼 */}
      <button
        onClick={handleUseItem}
        className="bg-red-500 hover:bg-red-700 w-24 h-12 rounded-lg text-white cursor-pointer"
      >
        아이템
      </button>

      {/* 도망 버튼 */}
      <button
        onClick={handleRunAway}
        className="bg-gray-500 hover:bg-gray-700 w-24 h-12 rounded-lg text-white cursor-pointer"
      >
        도망
      </button>
    </div>
  );
}
