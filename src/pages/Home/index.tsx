import React, {FunctionComponent, ReactElement, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Container, List, Paragraph} from '../../components/StyledComponents';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ISimpsons} from '../../utils/types';
import styled from '../../utils/styled-components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FloatingButton} from '../../components/FloatingButton';
import {useSelector, useDispatch} from 'react-redux';
import {simpsonListSelector} from '../../redux/simpsons/selectors';
import {isLoadingSelector} from '../../redux/loading/selectors';
import {SimpsonActions} from '../../redux/simpsons/actions';
import {Indicator} from '../../components/Indicator';
import {LoaderName} from '../../redux/loading/types';
import {IAppState} from '../../redux/types';

type IProps = NativeStackScreenProps<any, any>;

export const Home: FunctionComponent<IProps> = ({navigation}) => {
  const simpsons: ISimpsons[] = useSelector(simpsonListSelector);
  const loading: boolean = useSelector((state: IAppState) =>
    isLoadingSelector(state, LoaderName.Simpsons),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SimpsonActions.getSimpsons());
  }, [dispatch]);

  const onClickedDelete = async (id: string): Promise<void> => {
    const result = await simpsons.filter(element => {
      return element.id !== id;
    });
    await dispatch(SimpsonActions.deleteSimpson(result));
  };

  const renderItem = ({item}: {item: ISimpsons}) => (
    <Row>
      <TouchableOpacityView
        onPress={() => navigation.navigate('Details', item)}>
        <Column>
          <Avatar
            source={{
              uri: item.avatar,
            }}
          />
        </Column>
        <TextView>
          <Paragraph>{item.name}</Paragraph>
        </TextView>
      </TouchableOpacityView>
      <IconView>
        <AntDesign
          name="delete"
          size={20}
          onPress={() => onClickedDelete(item.id)}
        />
      </IconView>
    </Row>
  );
  const renderFlatList = (): ReactElement => (
    <List<any>
      data={simpsons}
      renderItem={renderItem}
      keyExtractor={(item: ISimpsons) => item.id}
    />
  );

  const renderFloatingButton = (): ReactElement => (
    <FloatingButton onPress={() => navigation.navigate('AddNewCharacter')} />
  );
  const renderIndicator = (): ReactElement => <Indicator isLoading={loading} />;
  return (
    <Container>
      {renderIndicator()}
      {renderFlatList()}
      {renderFloatingButton()}
    </Container>
  );
};

const Row = styled(View)`
  flex-direction: row;
  padding-horizontal: 15px;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
`;
const TouchableOpacityView = styled(TouchableOpacity)`
  flex-direction: row;
  flex: 1;
`;
const Column = styled(View)`
  flex-direction: column;
  justify-content: center;
`;
const TextView = styled(View)`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
const IconView = styled(View)`
  flex-direction: column;
  justify-content: center;
`;
const Avatar = styled(Image)`
  width: 50px;
  height: 50px;
  resize-mode: center;
`;
