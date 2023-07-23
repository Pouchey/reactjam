import { EGameStatus } from '_types/game/enum';
import { startGame } from './actions/game';
import { playMeeting } from './actions/meeting';
import { playRound } from './actions/round';
import { getPossibleLocation } from './actions/round/move';
import { MAX_PLAYERS, MIN_PLAYERS } from './config';
import { initGame } from './config/game';
import { addNewPlayer, removePlayer } from './events/playerJoined';
import { setReady } from './actions/round/ready';
import { getPlayerAlive } from './actions/player';

Rune.initLogic({
  minPlayers: MIN_PLAYERS,
  maxPlayers: MAX_PLAYERS,
  setup: initGame,
  actions: {
    startGame: (_, { game }) => {
      startGame(game);
    },
    getPossibleLocation: (action, { game, playerId }) => {
      getPossibleLocation(game, playerId, action);
    },
    playRound: (action, { game, playerId }) => {
      playRound(game, playerId, action);
    },
    playMeeting: (action, { game, playerId }) => {
      playMeeting(game, playerId, action);
    },
    setReady: (action, { game, playerId }) => {
      setReady(action, game, playerId)
    }
  },
  events: {
    playerJoined: (playerId, { game }) => {
      addNewPlayer(game, playerId);
    },
    playerLeft: (playerId, { game }) => {
      removePlayer(game, playerId);
    },
  },
  update: ((game) => {
    if (game.game.status === EGameStatus.RESULT) {
      if (!getPlayerAlive(game.game).some(player => !player.ready)) {
        game.game.status = EGameStatus.PLAYING;
      }
    }
  })
});

export default Rune;