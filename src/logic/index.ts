import { startGame } from './actions/game';
import { playMeeting } from './actions/meeting';
import { playRound } from './actions/round';
import { getPossibleLocation } from './actions/round/move';
import { MAX_PLAYERS, MIN_PLAYERS } from './config';
import { initGame } from './config/game';
import { addNewPlayer, removePlayer } from './events/playerJoined';
import { setReady } from './actions/ready';
import { update } from './update';

Rune.initLogic({
  minPlayers: MIN_PLAYERS,
  maxPlayers: MAX_PLAYERS,
  setup: initGame,
  actions: {
    startGame: (_, { game }) => {
      startGame(game);
    },
    //permet de régler les roles avant le debut de partie il existe une liste par default
    setRoles: (action, { game }) => {
      game.roleInGame = action.roles
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
  update: update,
});

export default Rune;
