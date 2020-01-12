import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.StatusBar.attrs(() => ({
  backgroundColor: '#131313',
  height: Constants.statusBarHeight,
  barStyle: 'dark-content',
}))``;
