import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${props => (props.modalVisible ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 1)')};
`;

export const RequestList = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  position: absolute;
  flex: 1;
`;

export const Separator = styled.View`
  height: 280px;
  width: 10px;
`;
