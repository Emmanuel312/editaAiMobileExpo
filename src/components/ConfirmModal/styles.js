import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import request from '../../assets/animations/send.json';

export const Container = styled.View`
  align-items: center;
  padding: 15px 0;
  height: 280px;
  width: ${Dimensions.get('window').width};
  background: #fff;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const Animation = styled(LottieView).attrs({
  source: request,
  autoPlay: true,
})`
  width: 180px;
  height: 180px;
`;

export const ConfirmButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #e00000;
`;

export const ConfirmButtonText = styled.Text`
  font-size: 14px;
  color: #e00000;
`;
