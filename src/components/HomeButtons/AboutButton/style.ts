import styled, { css } from 'styled-components';

export const Button = styled.button<{
  onClick: () => void;
}>`
  ${({ theme }) => css`
    height: 69px;
    width: 154px;
    color: ${theme.pallets.primary[500].string()};
    background-color: white;
    border-radius: 10px;
    margin-left: 100px;
  `};
`;

export const ModalContainer = styled.div<{
  showSlide: boolean;
}>`
  background-color: white;
  position: fixed;
  bottom: ${({ showSlide }) => (showSlide ? '-150vh' : '50vh')};
  background-color: #fff;
  width: 50%;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  left: 35%;
  padding: 30px;
  transition: all 0.3s ease-out;
  z-index: 10;
  text-align: center;
`;

export const ModalAbout = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Avatar = styled.img`
  height: 200px;
  width: 200px;
  object-fit: contain;
`;
