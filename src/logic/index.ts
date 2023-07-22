import { startGame } from './actions/game';
import { MAX_PLAYERS, MIN_PLAYERS } from './config';
import { initGame } from './config/game';
import { addNewPlayer, removePlayer } from './events/playerJoined';

Rune.initLogic({
  minPlayers: MIN_PLAYERS,
  maxPlayers: MAX_PLAYERS,
  setup: initGame,
  actions: {
    startGame: (_, { game }) => {
      startGame(game);
    },
    playRound: (action, { game, playerId }) => {
      // Handle play Round
    },
    playMeeting: (action, { game, playerId }) => {
      // Handle play meeting
    },
  },
  events: {
    playerJoined: (playerId, { game }) => {
      addNewPlayer(game, playerId);
    },
    playerLeft: (playerId, { game }) => {
      removePlayer(game, playerId);
    },
  },
});

export default Rune;
