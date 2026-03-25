import { Button } from 'antd';

interface DiffViewProps {
  original: string;
  improved: string;
  onApply: () => void;
  onReject: () => void;
}

interface DiffToken {
  text: string;
  type: 'same' | 'added' | 'removed';
}

function computeWordDiff(oldText: string, newText: string): { left: DiffToken[]; right: DiffToken[] } {
  const oldWords = oldText.split(/(\s+)/);
  const newWords = newText.split(/(\s+)/);

  // Simple LCS-based diff
  const m = oldWords.length;
  const n = newWords.length;

  // Build LCS table
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (oldWords[i - 1] === newWords[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find diff
  const left: DiffToken[] = [];
  const right: DiffToken[] = [];
  let i = m, j = n;

  const leftStack: DiffToken[] = [];
  const rightStack: DiffToken[] = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldWords[i - 1] === newWords[j - 1]) {
      leftStack.push({ text: oldWords[i - 1], type: 'same' });
      rightStack.push({ text: newWords[j - 1], type: 'same' });
      i--; j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      rightStack.push({ text: newWords[j - 1], type: 'added' });
      j--;
    } else {
      leftStack.push({ text: oldWords[i - 1], type: 'removed' });
      i--;
    }
  }

  leftStack.reverse().forEach(t => left.push(t));
  rightStack.reverse().forEach(t => right.push(t));

  return { left, right };
}

export default function DiffView({ original, improved, onApply, onReject }: DiffViewProps) {
  const { left, right } = computeWordDiff(original || '', improved);

  return (
    <div className="border border-blue-200 rounded-lg overflow-hidden" style={{ maxWidth: 942 }}>
      <div className="grid grid-cols-2">
        {/* Original */}
        <div className="border-r border-blue-200">
          <div className="bg-red-50 dark:bg-red-900/20 px-3 py-2 border-b border-blue-200">
            <span className="font-semibold text-sm text-red-700 dark:text-red-300">Было</span>
          </div>
          <div className="p-3 text-sm leading-relaxed min-h-[100px]">
            {!original || original.trim() === '' ? (
              <span className="text-gray-400 italic">Описание отсутствовало</span>
            ) : (
              left.map((token, i) => (
                <span
                  key={i}
                  className={token.type === 'removed' ? 'bg-red-200 dark:bg-red-800 line-through text-red-700 dark:text-red-300' : ''}
                >
                  {token.text}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Improved */}
        <div>
          <div className="bg-green-50 dark:bg-green-900/20 px-3 py-2 border-b border-blue-200">
            <span className="font-semibold text-sm text-green-700 dark:text-green-300">Стало</span>
          </div>
          <div className="p-3 text-sm leading-relaxed min-h-[100px]">
            {right.map((token, i) => (
              <span
                key={i}
                className={token.type === 'added' ? 'bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300' : ''}
              >
                {token.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2 p-3 border-t border-blue-200 bg-gray-50 dark:bg-gray-800">
        <Button type="primary" size="small" onClick={onApply}>
          Применить
        </Button>
        <Button size="small" onClick={onReject}>
          Отклонить
        </Button>
      </div>
    </div>
  );
}
