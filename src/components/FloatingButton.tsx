import React, {FunctionComponent} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from '../utils/styled-components';
import {theme} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Props extends TouchableOpacityProps {
  title?: string;
}

export const FloatingButton: FunctionComponent<Props> = ({
  disabled,
  ...touchableOpacityProps
}) => (
  <ButtonContainer disabled={disabled || false} {...touchableOpacityProps}>
    <AntDesign name="plus" size={50} color={'#fff'} />
  </ButtonContainer>
);

const ButtonContainer = styled.TouchableOpacity<{disabled?: boolean}>`
  background-color: ${({disabled}) =>
    disabled ? '#ccc' : theme.colors.primary};
  justify-content: center;
  align-self: center;
  align-items:center
  border-radius: 300px;
  position: absolute;
  bottom: 10px;
  height: 70px;
  width: 70px;
`;
