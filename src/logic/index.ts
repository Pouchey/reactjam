import { startGame } from './actions/game';
import { selectRole } from './actions/player';
import { MAX_PLAYERS, MIN_PLAYERS } from './config';
import { initGame } from './config/game';

Rune.initLogic({
  minPlayers: MIN_PLAYERS,
  maxPlayers: MAX_PLAYERS,
  setup: initGame,
  actions: {
    startGame: (_, { game }) => {
      startGame(game);
    },
    selectRole: (role, { game, playerId }) => {
      selectRole(game, playerId, role);
    },
    playTurn: (action, { game, playerId }) => {
      // Handle play turn
    },
    playMeeting: (action, { game, playerId }) => {
      // Handle play meeting
    },
  },
});

export default Rune;
