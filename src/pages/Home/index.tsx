import React, { useState } from 'react';
import AboutButton from 'src/components/HomeButtons/AboutButton';
import AuthorsButton from 'src/components/HomeButtons/AuthorsButton';
import MainModal from 'src/components/MainModal';
import MainText from 'src/components/MainText';
import * as S from './style';

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [showFeatures, setShowFeatures] = useState(true);

  return (
    <S.Layout>
      <AboutButton setShowFeatures={setShowFeatures} />
      <AuthorsButton setShowModal={setShowModal} />
      <MainModal showModal={showModal} />
      <MainText showFeatures={showFeatures} />
    </S.Layout>
  );
};

export default Home;
