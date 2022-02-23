import Color from 'color';

export enum SchemaName {
  PRIMARY = 'primary',
  ERROR = 'error',
  SUCCESS = 'success',
  INACTIVE = 'inactive',
}

export interface IMDPallet {
  50: Color;
  100: Color;
  200: Color;
  300: Color;
  400: Color;
  500: Color;
  600: Color;
  700: Color;
  800: Color;
  900: Color;
}

export type SchemaNameValue = `${SchemaName}`;
