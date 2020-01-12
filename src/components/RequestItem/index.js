import React from 'react';
import PropTypes from 'prop-types';
import { Container, AvatarImage, RequestText, RequestButton, RequestButtonText } from './styles';

export default function RequestItem({ onPress, id }) {
  return (
    <Container>
      <AvatarImage source={{ uri: 'https://api.adorable.io/avatars/80/abott@adorable.png' }} />
      <RequestText>@Lets pode editar seu vídeo</RequestText>
      <RequestButton onPress={() => onPress(id)}>
        <RequestButtonText>Edita aí</RequestButtonText>
      </RequestButton>
    </Container>
  );
}

RequestItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
