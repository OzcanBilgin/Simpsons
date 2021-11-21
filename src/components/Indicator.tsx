import React, {FunctionComponent} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  ActivityIndicatorProps,
} from 'react-native';
import styled from '../utils/styled-components';

interface Props extends ActivityIndicatorProps {
  isLoading?: boolean;
}

export const Indicator: FunctionComponent<Props> = ({
  ...activityIndicatorProps
}) => {
  if (activityIndicatorProps.isLoading) {
    return (
      <Container>
        <Row>
          <ActivityIndicator size="large" {...activityIndicatorProps} />
          <Title>Loading ...</Title>
        </Row>
      </Container>
    );
  } else {
    return null;
  }
};

const Container = styled(View)`
  flex: 1;
  background-color: #0005;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;
const Title = styled(Text)`
  margin-left: 10px;
`;
const Row = styled(View)`
  background-color: #fff;
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
