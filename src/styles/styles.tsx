import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#484966',
  white: '#ffffff',
  greyLight: '#f8f8f8',
  greyDark: '#bcbbbb',
  greyText: '#404040',
  black: '#000000',
  red: '#df4759',
  green: '#61bb79',
};

export const stylesSheet = StyleSheet.create({
  buttonContainerAddTask: {
    width: 250,
  },
  buttonAddTask: {
    backgroundColor: colors.green,
  },
  inputFormClockContainer: {
    width: '95%',
    backgroundColor: '#f8f8f8',
    height: 45,
    borderRadius: 4,
  },
  inputFormClockinputContainer: {
    borderBottomWidth: 0,
    borderRadius: 4,
  },
  inputFormClockInput: {
    fontSize: 14,
    color: '#bcbbbb',
  },
});
