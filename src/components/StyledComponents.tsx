import styled from '../utils/styled-components';
import {View, Text, FlatList} from 'react-native';
import {theme} from '../utils/theme';
import {ISimpsons} from '../utils/types';

export const Container = styled(View)`
  flex: 1;
  background-color: ${theme.colors.backgroundColor};
`;

export const Card = styled(View)`
  background-color: white;
  border-radius: 6px;
  padding-horizontal: 16;
  padding-vertical: 8px;
  width: 100%;
  align-items: center;
`;

export const Paragraph = styled(Text)`
  font-size: 18px;
  margin-vertical: 20px;
`;

export const List = styled(FlatList as new () => FlatList<ISimpsons>)`
  background-color: white;
`;
