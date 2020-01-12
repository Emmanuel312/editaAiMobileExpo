import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 3;
  background: ${darken('0.2', '#e00000')};
  z-index: 1;
`;

export const ExitView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px;
`;

export const UserInfoView = styled.View`
  align-items: center;
`;

export const UserName = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  margin-top: 70px;
`;

export const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #fff;
  position: relative;
  margin-top: 10px;
`;

export const Body = styled.View`
  flex: 7;
`;

export const TouchView = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  activeOpacity: 0.5,
})``;
