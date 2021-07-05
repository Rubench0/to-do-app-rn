import React from 'react';
// import {StyledText, TabItem} from '../../styles/global';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Board from '../../screens/board/Board';
import {colors} from '../../styles/styles';
import Other from '../board/Other';
import {useDispatch} from 'react-redux';
import {updateScreen} from '../../redux/tasks/actions';

const Tab = createMaterialTopTabNavigator();

const Tabs: React.FC<any> = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 10},
          tabStyle: {height: 50},
          indicatorStyle: {
            marginHorizontal: 30,
            width: 30,
            backgroundColor: colors.black,
            color: colors.primary,
          },
        }}>
        <Tab.Screen
          name="All"
          component={Board}
          listeners={{
            tabPress: () => {
              dispatch(updateScreen({screen: 'All'}));
            },
          }}
        />
        <Tab.Screen
          name="Completed"
          component={Board}
          listeners={{
            tabPress: () => {
              dispatch(updateScreen({screen: 'Completed'}));
            },
          }}
        />
        <Tab.Screen
          name="Uncompleted"
          component={Board}
          listeners={{
            tabPress: () => {
              dispatch(updateScreen({screen: 'Uncompleted'}));
            },
          }}
        />
        <Tab.Screen name="Favorite" component={Other} />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
