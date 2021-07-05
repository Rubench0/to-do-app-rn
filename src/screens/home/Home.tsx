import React, {useEffect} from 'react';
import Tabs from '../../components/navigation/Tabs';
import {NavigationProps} from '../../prototypes/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setStorageTask} from '../../redux/tasks/actions';

const Home: React.FC<NavigationProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let stateLocal = await AsyncStorage.getItem('@tasks');
      stateLocal = JSON.parse(stateLocal);
      dispatch(setStorageTask({task: stateLocal}));
    } catch (e) {
      console;
    }
  };

  return <Tabs />;
};

export default Home;
