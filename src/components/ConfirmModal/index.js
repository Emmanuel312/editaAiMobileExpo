import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, TitleText, Animation, ConfirmButton, ConfirmButtonText } from './styles';

export default function ConfirmModal({ isFocused, handleConfirm }) {
  const animationRef = useRef();

  useEffect(() => {
    animationRef.current.play();
  }, [isFocused]);

  return (
    <Container>
      <TitleText>Deseja que @John edite seu video?</TitleText>
      <Animation ref={animationRef} />

      <ConfirmButton onPress={handleConfirm}>
        <ConfirmButtonText>Confirmar</ConfirmButtonText>
      </ConfirmButton>
    </Container>
  );
}

ConfirmModal.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};
