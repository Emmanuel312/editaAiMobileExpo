import React, { useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import { Container, RequestList, Separator } from './styles';
import RequestItem from '../../components/RequestItem';
import ConfirmModal from '../../components/ConfirmModal';

function Request({ isFocused }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [idItem, setIdItem] = useState(0);
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

  function onPress(id) {
    setIdItem(id);
    setModalVisible(true);
  }

  function handleConfirm() {
    // fetch data
    setModalVisible(false);
  }

  return (
    <Container modalVisible={modalVisible}>
      {modalVisible ? (
        <ConfirmModal handleConfirm={handleConfirm} isFocused={isFocused && modalVisible} />
      ) : (
        <RequestList
          data={data}
          renderItem={({ item }) => <RequestItem onPress={onPress} {...item} key={item.id} />}
          keyExtractor={item => String(item.id)}
          ItemSeparatorComponent={() => <Separator />}
        />
      )}
    </Container>
  );
}

Request.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Request);
