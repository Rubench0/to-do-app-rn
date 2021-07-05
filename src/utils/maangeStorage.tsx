import AsyncStorage from '@react-native-async-storage/async-storage';
import {ItemTask} from '../prototypes/task';

export const setStoreData = async (tasks: ItemTask[]) => {
  try {
    let valStorage = JSON.stringify(tasks);
    console.log('pase');
    await AsyncStorage.setItem('@tasks', valStorage);
  } catch (error) {
    console.log(error);
  }
};
