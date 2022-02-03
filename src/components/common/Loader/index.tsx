import React from 'react';
import { SchemaNameValue } from 'src/types/Schema.type';
import * as S from './style';

interface Props {
  size?: number;
  schema?: SchemaNameValue;
  isText?: boolean;
}

const Loader: React.FC<Props> = ({
  size,
  schema = 'primary',
  isText = false,
}) => {
  return (
    <S.Loader size={size} schema={schema} isText={isText}>
      <div />
      <div />
      <div />
      <div />
    </S.Loader>
  );
};

Loader.defaultProps = {
  size: undefined,
  schema: 'primary',
  isText: false,
};

export default Loader;
