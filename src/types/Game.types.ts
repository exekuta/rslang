export enum GameName {
  AUDIO_CHALLENGE = 'audioChallenge',
  SPRINT = 'sprint',
}

type GameRouteNames = { [K in GameName]: string }

export const gameRouteNames: GameRouteNames = {
  [GameName.AUDIO_CHALLENGE]: 'audio-challenge',
  [GameName.SPRINT]: 'sprint',
};
