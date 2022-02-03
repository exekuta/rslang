import { SchemaName } from 'src/types/Schema.type';
import * as P from './pallets';

export const theme = {
  pallets: {
    [SchemaName.ERROR]: P.error,
    [SchemaName.SUCCESS]: P.success,
    [SchemaName.PRIMARY]: P.primary,
    [SchemaName.INACTIVE]: P.inactive,
    text: P.text,
    dictionaries: P.dictionaries,
  },
  spacing(amount: number) {
    return `${amount * 5}px`;
  },
} as const;
