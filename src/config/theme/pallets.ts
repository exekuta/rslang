import { hsl } from 'color';
import { DictionaryName } from 'src/types/Dictionary.type';
import { colors } from './colors';

export const error = colors.red;
export const success = colors.green;
export const primary = colors.blue;
export const inactive = colors.grey;

export const text = {
  100: hsl(210, 29, 15),
  200: hsl(210, 21, 20),
  300: hsl(210, 16, 30),
  400: hsl(210, 12, 45),
  500: hsl(210, 12, 60),
  600: hsl(210, 13, 75),
  700: hsl(210, 13, 80),
  800: hsl(210, 13, 90),
  900: hsl(210, 14, 95),
  1000: hsl(0, 0, 100),
} as const;

export const dictionaries = {
  [DictionaryName.LEVEL_1]: colors.teal,
  [DictionaryName.LEVEL_2]: colors.orange,
  [DictionaryName.LEVEL_3]: colors.deeporange,
  [DictionaryName.LEVEL_4]: colors.pink,
  [DictionaryName.LEVEL_5]: colors.deeppurple,
  [DictionaryName.LEVEL_6]: colors.lightblue,
} as const;
