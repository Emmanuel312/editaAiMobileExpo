import React, { useState } from 'react';
import {
  Container,
  Logo,
  TextLogo,
  ImageLogo,
  Input,
  Button,
  ButtonText,
  NavigationText,
  Navigation,
} from '../Login/styles';
import logo from '../../assets/images/logo.png';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Logo>
        <TextLogo>Edita aí</TextLogo>
        <ImageLogo source={logo} />
      </Logo>

      <Input value={email} onChangeText={setEmail} placeholder="nome" placeholderTextColor="#ccc" />

      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        placeholderTextColor="#ccc"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="senha"
        placeholderTextColor="#ccc"
      />

      <Button>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
      <Navigation onPress={() => navigation.navigate('Login')}>
        <NavigationText>Fazer login</NavigationText>
      </Navigation>
    </Container>
  );
}
