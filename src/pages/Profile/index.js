import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  Header,
  ExitView,
  UserName,
  AvatarImage,
  Body,
  TouchView,
  UserInfoView,
} from './styles';

export default function Profile() {
  async function handleChangePhoto() {
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    const cameraRoll = await ImagePicker.requestCameraRollPermissionsAsync();

    if (cameraRoll.status === 'granted' && camera.status === 'granted') {
      ImagePicker.launchImageLibraryAsync();
    }
  }
  return (
    <Container>
      <Header>
        <ExitView>
          <TouchView>
            <AntDesign name="logout" size={25} color="#fff" />
          </TouchView>
        </ExitView>
        <UserInfoView>
          <UserName>Moura Nando</UserName>
          <TouchView onPress={handleChangePhoto}>
            <AvatarImage
              source={{ uri: 'https://api.adorable.io/avatars/80/abott@adorable.png' }}
            />
          </TouchView>
        </UserInfoView>
      </Header>
      <Body />
    </Container>
  );
}
