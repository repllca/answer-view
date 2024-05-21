import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, countを設定する] = useState<number>(0);

  return (
    <div>
      <p>あなたがボタンを押した回数: {count}</p>
      <button onClick={() => countを設定する(count + 1)}>押す</button>
    </div>
  );
}