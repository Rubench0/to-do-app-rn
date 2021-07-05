import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native-elements';
import {StyledViewBottomButton} from '../../styles/global';
import {stylesSheet} from '../../styles/styles';

const ButtonAdd: React.FC<any> = () => {
  const navigation = useNavigation();

  return (
    <StyledViewBottomButton>
      <Button
        title="Add a task"
        containerStyle={stylesSheet.buttonContainerAddTask}
        buttonStyle={stylesSheet.buttonAddTask}
        onPress={() => navigation.navigate('AddTask', {})}
      />
    </StyledViewBottomButton>
  );
};

export default ButtonAdd;
