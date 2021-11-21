import React, {FunctionComponent, ReactElement, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, View} from 'react-native';
import styled from '../../utils/styled-components';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {useDispatch} from 'react-redux';
import {SimpsonActions} from '../../redux/simpsons/actions';
import {v4 as uuidv4} from 'uuid';

type IProps = NativeStackScreenProps<any, any>;

export const AddNewCharacter: FunctionComponent<IProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    about: '',
    avatar: '',
    id: uuidv4(),
    job: '',
    name: '',
  });

  const onChangeText = (text: string, key: string) => {
    setFormData({...formData, [key]: text});
  };
  const renderNameSurname = (): ReactElement => (
    <Input
      title="Name Surname:"
      value={formData.name}
      onChangeText={(e: string) => onChangeText(e, 'name')}
    />
  );
  const renderJob = (): ReactElement => (
    <Input
      title="Job Title:"
      value={formData.job}
      onChangeText={(e: string) => onChangeText(e, 'job')}
    />
  );
  const renderAbout = (): ReactElement => (
    <Input
      title="About Him/Her:"
      value={formData.about}
      onChangeText={(e: string) => onChangeText(e, 'about')}
    />
  );
  const renderLink = (): ReactElement => (
    <Input
      title="Image Link:"
      multiline={true}
      numberOfLines={10}
      value={formData.avatar}
      onChangeText={(e: string) => onChangeText(e, 'avatar')}
    />
  );
  const onSubmit = (): void => {
    dispatch(SimpsonActions.addSimpson(formData));
    navigation.navigate('Simpsons');
  };
  const renderSubmit = (): ReactElement => (
    <Button title="Add Character" onPress={onSubmit} />
  );
  return (
    <ScrollView>
      <Column>
        {renderNameSurname()}
        {renderJob()}
        {renderAbout()}
        {renderLink()}
        {renderSubmit()}
      </Column>
    </ScrollView>
  );
};

const Column = styled(View)`
  flex-direction: column;
`;
