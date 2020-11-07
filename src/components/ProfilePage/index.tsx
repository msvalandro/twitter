import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Matheus Valandro</h1>
        <h2>@msvalandro</h2>

        <p>Lorem ipsum dolor sit amet.</p>

        <ul>
          <li>
            <LocationIcon />
            Porto Alegre, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 5 de outubro de 1995
          </li>
        </ul>
      </ProfileData>

      <Followage>
        <span>
          seguindo <strong>94</strong>
        </span>

        <span>
          <strong>672</strong> seguidores
        </span>
      </Followage>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
