import React, {FunctionComponent} from 'react';
import {TextInputProps, TextInput, Text} from 'react-native';
import styled from '../utils/styled-components';

interface Props extends TextInputProps {
  title: string;
}

export const Input: FunctionComponent<Props> = ({title, ...textInputProps}) => (
  <>
    <Title>{title}</Title>
    <TextInputContainer {...textInputProps} />
  </>
);

const TextInputContainer = styled(TextInput)`
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-radius: 6px;
  background-color: white;
  justify-content: flex-start;
`;
const Title = styled(Text)`
  font-size: 13px;
  margin-vertical: 5px;
  padding-left: 10px;
`;
