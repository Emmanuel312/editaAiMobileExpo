import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  width: 330px;
  height: 280px;
  padding-top: 40px;
  background: rgba(236, 0, 0, 0.5);
  border-radius: 15px;
`;

export const AvatarImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40;
  margin-bottom: 30px;
`;

export const RequestText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 30px;
`;

export const RequestButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #fff;
`;

export const RequestButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
`;
