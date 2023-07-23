import { TGameState } from "_types/game";

export const setReady = (action: any, game: TGameState, playerId: string) => {
    action;
    const player = game.players.find(player => player.id === playerId)
    if (player !== undefined) {
        player.ready = true
    }
}
