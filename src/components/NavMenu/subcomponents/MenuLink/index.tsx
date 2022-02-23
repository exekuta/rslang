import React from 'react';
import { IMenuRoute } from 'src/types/Route.type';
import * as S from './style';

const MenuLink: React.FC<IMenuRoute> = ({ Icon, path, title }) => {
  return (
    <S.Link to={path}>
      <Icon />
      {title}
    </S.Link>
  );
};

export default MenuLink;
