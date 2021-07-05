import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {StyledViewBottomButton} from '../../styles/global';
import {stylesSheet} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {addTask} from '../../redux/tasks/actions';
import {useNavigation} from '@react-navigation/native';
import {setStoreData} from '../../utils/maangeStorage';

const ButtonSubmit: React.FC<any> = ({form}) => {
  const {tasks} = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [count, setcount] = useState(0);

  const addCount = (value: number) => {
    setcount(value + 1);
  };

  useEffect(() => {
    addCount(tasks.length);
    setStoreData(tasks);
  }, [tasks]);

  const addItem = async () => {
    let task = {
      task: {
        ...form,
        state: false,
        id: count,
      },
    };
    dispatch(addTask(task));
    navigation.navigate('Home', {});
  };

  return (
    <StyledViewBottomButton>
      <Button
        title="Create a task"
        containerStyle={stylesSheet.buttonContainerAddTask}
        buttonStyle={stylesSheet.buttonAddTask}
        onPress={addItem}
      />
    </StyledViewBottomButton>
  );
};

export default ButtonSubmit;
