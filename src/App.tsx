import Game from '_components/game';
import Meeting from '_components/meeting';
import Start from '_components/start';
import UIWrapper from '_components/ui';
import { TGameContext } from '_types/game/context';
import { EGameStatus } from '_types/game/enum';
import { useEffect, useState } from 'react';

import { GameContext } from './hooks/useGameContext';
import Rune from './logic';

const App = () => {
  const [gameContext, setGameContext] = useState<TGameContext>();

  useEffect(() => {
    Rune.initClient({
      onChange: ({ newGame, players }) => {
        setGameContext({
          game: newGame,
          players,
        });
      },
    });
  }, []);

  if (!gameContext) {
    return <div>Loading...</div>;
  }

  return (
    <GameContext.Provider value={gameContext}>
      <UIWrapper>
        {gameContext.game.status === EGameStatus.WAITING && <Start />}
        {gameContext.game.status === EGameStatus.PLAYING && <Game />}
        {gameContext.game.status === EGameStatus.MEETING && <Meeting />}
      </UIWrapper>
    </GameContext.Provider>
  );
};

export default App;
