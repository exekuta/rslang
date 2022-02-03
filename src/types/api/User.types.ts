import { IAuth } from '../schemas';

export type IUserLogInResponse = IAuth

export interface IUserLogInData {
  email: string;
  password: string;
}

export interface IUserRegisterResponse {
  id: string;
  email: string;
  name: string;
}

export interface IUserRegisterData {
  name: string;
  email: string;
  password: string;
}

export interface IStringApiError {
  data?: string;
}

export type IUserRegisterError = {
  data?: {
    error?: {
      errors?: {
        path: keyof IUserLogInData;
        message: string
      }[];
    };
  };
};

export type IParcedError<T> = Partial<{
  [key in keyof T]: string
}>;
