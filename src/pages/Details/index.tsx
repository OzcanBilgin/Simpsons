import React, {FunctionComponent, ReactElement} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, ScrollView, View, Text} from 'react-native';
import styled from '../../utils/styled-components';

type IProps = NativeStackScreenProps<any, any>;

export const Details: FunctionComponent<IProps> = props => {
  const {name, job, about, avatar}: any = props?.route?.params;
  const renderAvatar = (): ReactElement => (
    <Avatar
      source={{
        uri: avatar,
      }}
    />
  );
  const renderName = (): ReactElement => <NameText>{name}</NameText>;
  const renderJob = (): ReactElement => <JobText>{job}</JobText>;
  const renderAbout = (): ReactElement => <AboutText>{about}</AboutText>;
  return (
    <ScrollView>
      <Column>
        {renderAvatar()}
        {renderName()}
        {renderJob()}
      </Column>
      {renderAbout()}
    </ScrollView>
  );
};

const Column = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Avatar = styled(Image)`
  width: 300px;
  height: 300px;
  resize-mode: center;
`;
const NameText = styled(Text)`
  font-size: 25px;
  margin-vertical: 5px;
  font-weight: bold;
`;
const JobText = styled(Text)`
  font-size: 18px;
  margin-vertical: 5px;
`;
const AboutText = styled(Text)`
  font-size: 14px;
  margin-vertical: 5px;
  margin-horizontal: 10px;
`;
