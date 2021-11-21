import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenList} from './Routers';

const Stack = createNativeStackNavigator();

function RootNavigator(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screenList.map((screen: any) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
