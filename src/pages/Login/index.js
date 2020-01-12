import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AsyncStorage } from 'react-native';
import * as AuthActions from '../../store/modules/auth/actions';
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
  Loading,
  LoginView,
  LoadingView,
} from './styles';
import logo from '../../assets/images/logo.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.Auth.loading);

  function handleSignIn() {
    dispatch(AuthActions.signInRequest(email, password));
  }

  return (
    <Container>
      <Logo>
        <TextLogo>Edita aí</TextLogo>
        <ImageLogo source={logo} />
      </Logo>

      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        placeholderTextColor="#ccc"
        autoCorrect={false}
        keyboardType="email-address"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="senha"
        placeholderTextColor="#ccc"
        secureTextEntry
      />

      <Button onPress={() => handleSignIn()}>
        <LoginView>
          <ButtonText>Login</ButtonText>
        </LoginView>
        {loading && (
          <LoadingView>
            <Loading />
          </LoadingView>
        )}
      </Button>
      <Navigation onPress={() => navigation.navigate('Register')}>
        <NavigationText>Cadastre-se</NavigationText>
      </Navigation>
    </Container>
  );
}
