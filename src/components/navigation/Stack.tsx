import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home/Home';
import {colors} from '../../styles/styles';
import FormTask from '../../screens/task/FormTask';
import {Icon} from 'react-native-elements';
import {StyledActionAppBar, StyledViewFlexRow} from '../../styles/global';

type RootStackParamList = {
  Home: any;
  AddTask: any;
};

const Stack = createStackNavigator<RootStackParamList>();

const btnsNavigator = () => {
  return (
    <StyledViewFlexRow>
      <StyledActionAppBar onPress={() => console.log('search')}>
        <Icon
          type="font-awesome-5"
          name="search"
          color={colors.black}
          size={18}
        />
      </StyledActionAppBar>
      <StyledActionAppBar onPress={() => console.log('notifications')}>
        <Icon
          type="font-awesome-5"
          name="bell"
          color={colors.black}
          size={18}
        />
      </StyledActionAppBar>
      <StyledActionAppBar onPress={() => console.log('drawer')}>
        <Icon
          type="font-awesome-5"
          name="bars"
          color={colors.black}
          size={18}
        />
      </StyledActionAppBar>
    </StyledViewFlexRow>
  );
};

const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitleAlign: 'left',
        headerRight: () => btnsNavigator(),
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: colors.white,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}
    />
    <Stack.Screen
      name="AddTask"
      component={FormTask}
      options={{
        headerTitleAlign: 'left',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: colors.white,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default MainStackNavigator;
