import { EGameStatus } from '_types/game/enum';
import { endRound, startGame } from './actions/game';
import { playMeeting } from './actions/meeting';
import { playRound } from './actions/round';
import { getPossibleLocation } from './actions/round/move';
import { MAX_PLAYERS, MIN_PLAYERS } from './config';
import { initGame } from './config/game';
import { addNewPlayer, removePlayer } from './events/playerJoined';
import { setReady } from './actions/round/ready';
import { arrestedPlayer, getPlayerAlive } from './actions/player';

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
    const playerAlive = getPlayerAlive(game.game)
    if (game.game.status === EGameStatus.RESULT) {
      if (!playerAlive.some(player => !player.ready)) {
        game.game.status = EGameStatus.PLAYING;
      }
    }
    if (game.game.status === EGameStatus.MEETING) {
      if (!playerAlive.some(player => !player.voteUse)) {
        game.game.status = EGameStatus.RESULT;
        arrestedPlayer(game.game);
        endRound(game.game);
      }
    }
  })
});

export default Rune;
