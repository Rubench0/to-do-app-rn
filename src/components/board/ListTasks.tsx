import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Checkbox, Text} from 'native-base';
import {
  StyledTextItemList,
  StyledViewWithOutFlexRowList,
} from '../../styles/global';
import {updateTask} from '../../redux/tasks/actions';
import {ItemTask} from '../../prototypes/task';
import {setStoreData} from '../../utils/maangeStorage';

const ListTasks: React.FC<any> = () => {
  const {tasks, screen} = useSelector((state: any) => state.todo);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, [tasks, screen]);

  const getData = () => {
    let filterTasks;
    switch (screen) {
      case 'Completed':
        filterTasks = tasks.filter((item: ItemTask) => item.state === true);
        break;
      case 'Uncompleted':
        filterTasks = tasks.filter((item: ItemTask) => item.state === false);
        break;
      default:
        filterTasks = tasks;
        break;
    }

    setData(filterTasks);
  };

  const handleTask = (value: boolean, item: ItemTask) => {
    let task = {
      task: {
        ...item,
        state: value,
      },
    };
    dispatch(updateTask(task));
    setStoreData(tasks);
  };

  const ItemList = (item: any) => {
    return (
      <StyledViewWithOutFlexRowList>
        <Checkbox
          value={item.state}
          onChange={param => handleTask(param, item)}
          accessibilityLabel="Task"
          defaultIsChecked={item.state}
        />
        <StyledTextItemList>{item.title}</StyledTextItemList>
      </StyledViewWithOutFlexRowList>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({item}) => ItemList(item)}
      keyExtractor={item => item.id}
      ListEmptyComponent={<Text>No tasks</Text>}
    />
  );
};

export default ListTasks;
