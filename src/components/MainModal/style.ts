import styled, { css } from 'styled-components';

export const ModalContainer = styled.div<{
  showSlide: boolean;
}>`
  background-color: white;
  position: fixed;
  top: 20vh;
  left: ${({ showSlide }) => (showSlide ? '150vw' : '35vw')};
  background-color: #fff;
  width: 50%;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.6s ease-out;
  z-index: 10;
  text-align: center;
  @media (max-width: 1400px) {
    top: 30vh;
    left: ${({ showSlide }) => (showSlide ? '150vw' : '40vw')};
  }
  @media (max-width: 1000px) {
    top: 20vh;
  }
  @media (max-width: 800px) {
    left: ${({ showSlide }) => (showSlide ? '150vw' : '10vw')};
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    top: 20vh;
  }
`;

export const ModalAbout = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  @media (max-width: 1000px) {
    flex-direction: column; 
  }
  @media (max-width: 500px) {
    gap: 20px; 
  }
`;

export const Avatar = styled.img`
  display: block;
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
  @media (max-width: 1400px) {
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
  @media (max-width: 1000px) {
    height: 100px;
    width: 100px;
    margin: 0 auto;
  }
`;

export const Header = styled.h2`
  display: inline-block;
  margin: 0 10px 10px 0;
`;

export const List = styled.ul`
  list-style: none;
`;

export const GithubSign = styled.img`
  height: 30px;
  width: 30px;
`;
