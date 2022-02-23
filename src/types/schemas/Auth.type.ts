export type IAuth = {
  message: string;
  userId: string;
  name: string;
} & ITokens;

export interface ITokens {
  token: string;
  refreshToken: string;
}
