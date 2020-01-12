import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #000;
`;

export const Logo = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 80px;
`;

export const TextLogo = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #e00000;
  margin-right: 15px;
`;

export const ImageLogo = styled.Image`
  height: 40px;
  width: 40px;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 315px;
  background: #fff;
  border-radius: 40px;
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e00000;
  border-radius: 30px;
  height: 40px;
  width: 155px;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const Navigation = styled.TouchableOpacity``;

export const LoginView = styled.View`
  flex: 9;
  justify-content: center;
  align-items: center;
`;

export const NavigationText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  text-decoration: underline;
`;
export const LoadingView = styled.View`
  flex: 1;

  flex-direction: row;
  justify-content: flex-end;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#fff',
  size: 20,
})``;
